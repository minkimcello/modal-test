import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

describe('Modal Test with Arrange Act Assert', () => {
  let app;
  beforeEach(() => {
    app = render(<App />);
  });

  describe('clicking on sign in button', () => {
    beforeEach(() => fireEvent.click(app.getByText('SIGN IN')));

    it('shows the modal', () => {
      expect(app.queryByTestId('modal')).toBeVisible();
    });

    describe('filling in the form', () => {
      beforeEach(() => fireEvent.change(app.getByPlaceholderText('USERNAME'), { target: { value: 'minkim' } }));

      it('shows filled in username', () => {
        expect(app.getByPlaceholderText('USERNAME').value).toEqual('minkim');
      });

      describe('submitting the data', () => {
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
