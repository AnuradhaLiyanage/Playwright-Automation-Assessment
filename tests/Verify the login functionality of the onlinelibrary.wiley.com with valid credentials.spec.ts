import { test, expect } from '@playwright/test';
import { url } from 'inspector';

const URL = "https://onlinelibrary.wiley.com/action/doLogin?societyURLCode=";

test('Verify the login functionality of the onlinelibrary.wiley.com with valid credentials', async ({ request }) => {
  let Response = await request.post( 
    URL, {
    data: {
      login: 'nld.deshani@gmail.com',
      password: 'Anuradha@123'
    }
  });
  // ...
  expect(Response.status()).toBe(302);
  expect(Response.status()).toBeTruthy();
});