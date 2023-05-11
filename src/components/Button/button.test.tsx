import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button, { ButtonProps ,ButtonType, ButtonSize } from './button';

const btnProps:ButtonProps = {
  btnType: ButtonType.Link,
  onClick: jest.fn()
}
const testProps: ButtonProps = {
  btnType: ButtonType.Danger,
  size: ButtonSize.small,
  disabled: true,
  children: 'test button',
  onClick: jest.fn()
}

test('renders learn react link', () => {
  render(<Button>learn react</Button>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement.tagName).toEqual('BUTTON');
  expect(linkElement).toHaveClass('btn btn-default')
});

test('renders input as link', () => {
  render(<Button {...btnProps} href="http://baidu.com">learn react</Button>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement.tagName).toEqual('A');
  expect(linkElement).toHaveClass('btn btn-link')
  fireEvent.click(linkElement)
  expect(btnProps.onClick).toHaveBeenCalled()
});

test('renders disabled as danger', () => {
  render(<Button {...testProps}>learn react</Button>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument()
  expect(linkElement).toBeTruthy()
  fireEvent.click(linkElement)
  expect(testProps.onClick).not.toHaveBeenCalled()
});