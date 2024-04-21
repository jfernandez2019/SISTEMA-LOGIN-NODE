import { useContext } from 'react';
import { RouterContext } from 'react-router';

export function useHistory() {
  return useContext(RouterContext).history;
}
