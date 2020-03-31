import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

describe('Arrange Act Assert with Jest', () => {
  let app;
  beforeEach(() => {
    app = render(<App />);
  });

  describe('clicking on sign in button', () => {
    beforeEach(() => fireEvent.click(app.getByTestId('sign-in-button')));

    it('shows the modal', () => {
      expect(app.queryByTestId('modal')).toBeVisible();
    });

    describe('filling in the form', () => {
      beforeEach(() => fireEvent.change(app.getByTestId('modal-username'), { target: { value: 'minkim' } }));

      it('shows filled in username', () => {
        expect(app.getByTestId('modal-username').value).toEqual('minkim');
      });

      describe('submitting the data', () => {
        beforeEach(() => fireEvent.click(app.getByTestId('modal-button')));

        it('closes the modal', () => {
          expect(app.queryByTestId('modal')).toBeNull();
        });

        it('shows the welcome text', () => {
          expect(app.getByText('Hello minkim.')).toBeVisible();
        });
      });
    });
  });
});
