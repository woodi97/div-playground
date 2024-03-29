/**
 * This file is AUTO GENERATED by [msw-auto-mock](https://github.com/zoubingwu/msw-auto-mock)
 * Feel free to commit/edit it as you need.
 */
/* eslint-disable */
/* tslint:disable */
import { HttpResponse, http } from "msw";
import { faker } from "@faker-js/faker";
import { setupWorker } from "msw/browser";

faker.seed(1);

const baseURL = "";
const MAX_ARRAY_LENGTH = 20;

let i = 0;
const next = () => {
  if (i === Number.MAX_SAFE_INTEGER - 1) {
    i = 0;
  }
  return i++;
};

export const handlers = [
  http.put(`${baseURL}/pet`, () => {
    const resultArray = [
      [getUpdatePet200Response(), { status: 200 }],
      [null, { status: 400 }],
      [null, { status: 404 }],
      [null, { status: 405 }],
    ];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.post(`${baseURL}/pet`, () => {
    const resultArray = [
      [getAddPet200Response(), { status: 200 }],
      [null, { status: 405 }],
    ];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.get(`${baseURL}/pet/findByStatus`, () => {
    const resultArray = [
      [getFindPetsByStatus200Response(), { status: 200 }],
      [null, { status: 400 }],
    ];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.get(`${baseURL}/pet/findByTags`, () => {
    const resultArray = [
      [getFindPetsByTags200Response(), { status: 200 }],
      [null, { status: 400 }],
    ];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.get(`${baseURL}/pet/:petId`, () => {
    const resultArray = [
      [getGetPetById200Response(), { status: 200 }],
      [null, { status: 400 }],
      [null, { status: 404 }],
    ];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.post(`${baseURL}/pet/:petId`, () => {
    const resultArray = [[null, { status: 405 }]];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.delete(`${baseURL}/pet/:petId`, () => {
    const resultArray = [[null, { status: 400 }]];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.post(`${baseURL}/pet/:petId/uploadImage`, () => {
    const resultArray = [[getUploadFile200Response(), { status: 200 }]];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.get(`${baseURL}/store/inventory`, () => {
    const resultArray = [[getGetInventory200Response(), { status: 200 }]];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.post(`${baseURL}/store/order`, () => {
    const resultArray = [
      [getPlaceOrder200Response(), { status: 200 }],
      [null, { status: 405 }],
    ];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.get(`${baseURL}/store/order/:orderId`, () => {
    const resultArray = [
      [getGetOrderById200Response(), { status: 200 }],
      [null, { status: 400 }],
      [null, { status: 404 }],
    ];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.delete(`${baseURL}/store/order/:orderId`, () => {
    const resultArray = [
      [null, { status: 400 }],
      [null, { status: 404 }],
    ];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.post(`${baseURL}/user`, () => {
    const resultArray = [[getCreateUserdefaultResponse(), { status: NaN }]];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.post(`${baseURL}/user/createWithList`, () => {
    const resultArray = [
      [getCreateUsersWithListInput200Response(), { status: 200 }],
      [null, { status: NaN }],
    ];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.get(`${baseURL}/user/login`, () => {
    const resultArray = [
      [getLoginUser200Response(), { status: 200 }],
      [null, { status: 400 }],
    ];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.get(`${baseURL}/user/logout`, () => {
    const resultArray = [[null, { status: NaN }]];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.get(`${baseURL}/user/:username`, () => {
    const resultArray = [
      [getGetUserByName200Response(), { status: 200 }],
      [null, { status: 400 }],
      [null, { status: 404 }],
    ];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.put(`${baseURL}/user/:username`, () => {
    const resultArray = [[null, { status: NaN }]];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.delete(`${baseURL}/user/:username`, () => {
    const resultArray = [
      [null, { status: 400 }],
      [null, { status: 404 }],
    ];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
];

export function getUpdatePet200Response() {
  return {
    id: 10,
    name: "doggie",
    category: {
      id: 1,
      name: "Dogs",
    },
    photoUrls: [
      ...new Array(faker.number.int({ min: 1, max: MAX_ARRAY_LENGTH })).keys(),
    ].map((_) => faker.lorem.slug(1)),
    tags: [
      ...new Array(faker.number.int({ min: 1, max: MAX_ARRAY_LENGTH })).keys(),
    ].map((_) => ({
      id: faker.number.int({ min: undefined, max: undefined }),
      name: faker.person.fullName(),
    })),
    status: faker.helpers.arrayElement(["available", "pending", "sold"]),
  };
}

export function getAddPet200Response() {
  return {
    id: 10,
    name: "doggie",
    category: {
      id: 1,
      name: "Dogs",
    },
    photoUrls: [
      ...new Array(faker.number.int({ min: 1, max: MAX_ARRAY_LENGTH })).keys(),
    ].map((_) => faker.lorem.slug(1)),
    tags: [
      ...new Array(faker.number.int({ min: 1, max: MAX_ARRAY_LENGTH })).keys(),
    ].map((_) => ({
      id: faker.number.int({ min: undefined, max: undefined }),
      name: faker.person.fullName(),
    })),
    status: faker.helpers.arrayElement(["available", "pending", "sold"]),
  };
}

export function getFindPetsByStatus200Response() {
  return [
    ...new Array(faker.number.int({ min: 1, max: MAX_ARRAY_LENGTH })).keys(),
  ].map((_) => ({
    id: 10,
    name: "doggie",
    category: {
      id: 1,
      name: "Dogs",
    },
    photoUrls: [
      ...new Array(faker.number.int({ min: 1, max: MAX_ARRAY_LENGTH })).keys(),
    ].map((_) => faker.lorem.slug(1)),
    tags: [
      ...new Array(faker.number.int({ min: 1, max: MAX_ARRAY_LENGTH })).keys(),
    ].map((_) => ({
      id: faker.number.int({ min: undefined, max: undefined }),
      name: faker.person.fullName(),
    })),
    status: faker.helpers.arrayElement(["available", "pending", "sold"]),
  }));
}

export function getFindPetsByTags200Response() {
  return [
    ...new Array(faker.number.int({ min: 1, max: MAX_ARRAY_LENGTH })).keys(),
  ].map((_) => ({
    id: 10,
    name: "doggie",
    category: {
      id: 1,
      name: "Dogs",
    },
    photoUrls: [
      ...new Array(faker.number.int({ min: 1, max: MAX_ARRAY_LENGTH })).keys(),
    ].map((_) => faker.lorem.slug(1)),
    tags: [
      ...new Array(faker.number.int({ min: 1, max: MAX_ARRAY_LENGTH })).keys(),
    ].map((_) => ({
      id: faker.number.int({ min: undefined, max: undefined }),
      name: faker.person.fullName(),
    })),
    status: faker.helpers.arrayElement(["available", "pending", "sold"]),
  }));
}

export function getGetPetById200Response() {
  return {
    id: 10,
    name: "doggie",
    category: {
      id: 1,
      name: "Dogs",
    },
    photoUrls: [
      ...new Array(faker.number.int({ min: 1, max: MAX_ARRAY_LENGTH })).keys(),
    ].map((_) => faker.lorem.slug(1)),
    tags: [
      ...new Array(faker.number.int({ min: 1, max: MAX_ARRAY_LENGTH })).keys(),
    ].map((_) => ({
      id: faker.number.int({ min: undefined, max: undefined }),
      name: faker.person.fullName(),
    })),
    status: faker.helpers.arrayElement(["available", "pending", "sold"]),
  };
}

export function getUploadFile200Response() {
  return {
    code: faker.number.int({ min: undefined, max: undefined }),
    type: faker.lorem.slug(1),
    message: faker.lorem.slug(1),
  };
}

export function getGetInventory200Response() {
  return [...new Array(5).keys()]
    .map((_) => ({
      [faker.lorem.word()]: faker.number.int({
        min: undefined,
        max: undefined,
      }),
    }))
    .reduce((acc, next) => Object.assign(acc, next), {});
}

export function getPlaceOrder200Response() {
  return {
    id: 10,
    petId: 198772,
    quantity: 7,
    shipDate: faker.date.past(),
    status: "approved",
    complete: faker.datatype.boolean(),
  };
}

export function getGetOrderById200Response() {
  return {
    id: 10,
    petId: 198772,
    quantity: 7,
    shipDate: faker.date.past(),
    status: "approved",
    complete: faker.datatype.boolean(),
  };
}

export function getCreateUserdefaultResponse() {
  return {
    id: 10,
    username: "theUser",
    firstName: "John",
    lastName: "James",
    email: "john@email.com",
    password: "12345",
    phone: "12345",
    userStatus: 1,
  };
}

export function getCreateUsersWithListInput200Response() {
  return {
    id: 10,
    username: "theUser",
    firstName: "John",
    lastName: "James",
    email: "john@email.com",
    password: "12345",
    phone: "12345",
    userStatus: 1,
  };
}

export function getLoginUser200Response() {
  return faker.lorem.slug(1);
}

export function getGetUserByName200Response() {
  return {
    id: 10,
    username: "theUser",
    firstName: "John",
    lastName: "James",
    email: "john@email.com",
    password: "12345",
    phone: "12345",
    userStatus: 1,
  };
}

// This configures a Service Worker with the given request handlers.
export const startWorker = () => {
  const worker = setupWorker(...handlers);
  worker.start();
};
