// types.ts
export type StackParamList = {
    Home: undefined;
    Details: { itemId: number }; // Example
  };
  // types.ts
export type RootStackParamList = {
    Home: undefined; // No parameters for Home screen
    Details: { itemId: number }; // Example parameter for Details screen
  };
  