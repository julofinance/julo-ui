function useHandleIcon({
  leftIcon: leftIconProp,
  rightIcon: rightIconProp,
}: {
  leftIcon: React.ReactNode;
  rightIcon: React.ReactNode;
}) {
  const leftIcon = leftIconProp && (
    <span className='julo-badge__left-icon'>{leftIconProp}</span>
  );

  const rightIcon = rightIconProp && (
    <span className='julo-badge__right-icon'>{rightIconProp}</span>
  );

  return { leftIcon, rightIcon };
}

export default useHandleIcon;
