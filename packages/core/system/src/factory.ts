import { HTMLJuloComponents, styled } from './system';
import { As, DOMElements, JuloComponent } from './types';

type JuloFactory = {
  <T extends As, P extends object = NonNullable<object>>(
    component: T,
  ): JuloComponent<T, P>;
};

function factory() {
  const cache = new Map<DOMElements, JuloComponent<DOMElements>>();

  return new Proxy(styled, {
    /**
     * @example
     * const Div = julo("div")
     * const WithJulo = julo(AnotherComponent)
     */
    apply(_target, _thisArg, argArray: [DOMElements]) {
      return styled(...argArray);
    },
    /**
     * @example
     * <julo.div />
     */
    get(_, element: DOMElements) {
      if (!cache.has(element)) {
        cache.set(element, styled(element));
      }

      return cache.get(element);
    },
  }) as JuloFactory & HTMLJuloComponents;
}

export const julo = factory();
