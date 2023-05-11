import React from 'react'
import classNames from 'classnames'

// 按钮大小
export enum ButtonSize {
  Large = 'lg',
  small = 'sm'
}

export enum ButtonType {
  Primary = 'primary',
  Defalut = 'default',
  Danger = 'danger',
  Link = 'link'
}

interface IBaseButtonProps {
  /** 类名 */
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children?: React.ReactNode;
  href?: string;
}
// 交叉类型
type NativeButtonProps = IBaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
type NativeAnchorProps = IBaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;

export type ButtonProps = Partial<NativeButtonProps & NativeAnchorProps>

function Button(props:ButtonProps) {
  const {
    btnType,
    className,
    disabled,
    size,
    children,
    href,
    ...restProps
  } = props
  // btn btn-lg, btn-primary
  const classs = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    // link 没有disabled属性
    'disabled': (btnType === ButtonType.Link) && disabled
  })
  if (btnType === ButtonType.Link && href) {
    return (
      <a
        className={classs}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classs}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
    )
  }
}
Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Defalut,
  children: 'learn react'
}

export default Button