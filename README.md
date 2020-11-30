# study-around-front
스터디 그룹 관리 프로젝트


## error 관련

- If You have an these log **PLZ CHANGE** your typescript version that you are using on vscode.
  ```sh
  The following changes are being made to your tsconfig.json file:
    - compilerOptions.jsx must be react-jsx (to support the new JSX transform in React 17)
  ```  
  1. downgrade your typescript version 4.1.x to 4.0.5
    ```sh
      yarn add typescript@4.0.5
    ```
  2. change your typescript version that using on vscode
  reference:
  - https://www.reddit.com/r/react/comments/k0bw7y/compileroptionsjsx_must_be_reactjsx_to_support/  
  - https://github.com/facebook/create-react-app/issues/10103
