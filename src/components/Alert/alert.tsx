//import React { FC } from "react";
import classNames from 'classnames';
import Transition from '../Transition'
import React, { useState } from 'react';
import Icon from '../Icon'

export type AlertType = 'success' | 'default' | 'danger' | 'warning'

export interface AlertProps {
  // 标题
  title?: string,
  // 描述
  description?: string,
  // 类型
  type?: AlertType,
  // 是否有关闭按钮
  closable?: boolean,
  // 关闭事件
  onClose?: () => void
}

//const Alert: React.FC<AlertProps> = (props:any) => {
//}

function Alert (props: AlertProps) {
  const {
    title,
    description,
    closable,
    type,
    onClose
  } = props
  const [hide, setHide] = useState(false)
  const classes = classNames('viking-alert', {
    [`viking-alert-${type}`]: type
  })
  const titleClass = classNames('viking-alert-title', {
    'blod-title': description
  })
  const handleClose = (e: React.MouseEvent) => {
    if (onClose) {
      onClose()
    }
    setHide(true)
  }
  return (
    <Transition
      in={!hide}
      timeout={300}
      animation="zoom-in-top"
    >
      <div className={classes}>
        <span className={titleClass}>{title}</span>
        {description && <p className="viking-alert-desc">{description}</p>}
        {closable && <span className="viking-alert-close" onClick={handleClose}><Icon icon="times"/></span>}
      </div>
    </Transition>
  )
}
export default Alert