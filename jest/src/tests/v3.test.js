import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

function requires(check, fn) {
  beforeEach(() => {
    if (!check()) throw fn()
  });
}

describe('Modal Test with BigTest', () => {
  let app;
  beforeEach(() => {
    app = render(<App />);
  });

  describe('clicking on sign in button', () => {
    requires(() => app.getByText('SIGN IN'), () => new Error('Sign in button was not found'));

    beforeEach(() => fireEvent.click(app.getByText('SIGN IN')));

    describe('opening sign in modal', () => {
      requires(() => app.queryByTestId('modal'), () => new Error('Modal was not found'));

      describe('filling in the form', () => {
        requires(() => app.getByPlaceholderText('USERNAME'), () => new Error('USERNAME was not found'));

        beforeEach(() => fireEvent.change(app.getByPlaceholderText('USERNAME'), { target: { value: 'minkim' } }))

        requires(() => app.queryByText('minkim'), () => new Error('Could not fill USERNAME with value minkim'));

        describe('submitting the data', () => {
          requires(() => app.getByText('SUBMIT'), () => new Error('Could not find SUBMIT'));

          beforeEach(() => fireEvent.click(app.getByText('SUBMIT')));

          it('closes the modal', () => {
            expect(app.queryByTestId('modal')).toBeNull();
          });

          it('shows the welcome text', () => {
            expect(app.getByText('minkim')).toBeVisible();
          });
        });
      });
    });

  });
});
