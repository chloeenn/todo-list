import '@testing-library/jest-dom';
import 'jest-styled-components';
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'

afterEach(() => {
  cleanup();
})