import React from 'react'

type HorizontalPosition='left' | 'center' | 'right';
type VerticalPosition='top' |'center' | 'bottom';

type ToastPops={
    position:Exclude<`${HorizontalPosition}-${VerticalPosition}`,'center-center'> | 'center';
}

export const Toast = ({position}:ToastPops) => {
  return (
    <div>Toast Notification Position - {position}</div>
  )
}
