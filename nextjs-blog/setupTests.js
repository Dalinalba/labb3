// setupTests.js
import '@testing-library/jest-dom';
import { server } from './mocks/server'; // Import your mock server if you have any

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
