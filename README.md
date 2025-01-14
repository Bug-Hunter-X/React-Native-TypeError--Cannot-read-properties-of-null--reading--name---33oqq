# React Native TypeError: Cannot read properties of null (reading 'name')

This repository demonstrates a common error in React Native applications and its solution. The error, `TypeError: Cannot read properties of null (reading 'name')`, occurs when attempting to access a property of an object that is currently null or undefined. This typically happens when dealing with asynchronous data fetching where components render before data has fully loaded.

## Bug Description

The bug arises from accessing `this.state.userData.name` before the `userData` state has been populated with data from an API call.  The solution involves ensuring that the data is available before attempting to render elements dependent on it.

## How to Reproduce

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run the application on an emulator or device.
4. Observe the error in the console.

## Solution

The provided solution uses optional chaining and nullish coalescing operators to safely access the `name` property of `userData`. These operators short-circuit the evaluation if the left-hand side is null or undefined, preventing the error.