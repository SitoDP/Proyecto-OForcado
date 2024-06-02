import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Contact from './Contact';
import '@testing-library/jest-dom/extend-expect';

test('renders Contact form', () => {
    const { getByLabelText, getByText } = render(<Contact />);

    // Verificamos que los campos del formulario estén presentes
    expect(getByLabelText(/Dirección de correo electrónico/i)).toBeInTheDocument();
    expect(getByLabelText(/Nombre completo/i)).toBeInTheDocument();
    expect(getByLabelText(/Mensaje/i)).toBeInTheDocument();

    // Verificamos que el botón de envío esté presente
    expect(getByText(/Enviar/i)).toBeInTheDocument();
});

test('allows the user to fill out the form', () => {
    const { getByLabelText } = render(<Contact />);
    const inputEmail = getByLabelText(/Dirección de correo electrónico/i);
    const inputName = getByLabelText(/Nombre completo/i);
    const inputMessage = getByLabelText(/Mensaje/i);

    // Simulamos entrada del usuario
    fireEvent.change(inputEmail, { target: { value: 'test@example.com' } });
    fireEvent.change(inputName, { target: { value: 'Test User' } });
    fireEvent.change(inputMessage, { target: { value: 'Hello, World!' } });

    // Verificamos que los campos del formulario se hayan llenado
    expect(inputEmail.value).toBe('test@example.com');
    expect(inputName.value).toBe('Test User');
    expect(inputMessage.value).toBe('Hello, World!');
});