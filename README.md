# typeform-payload-helpers

[![Build Status](https://travis-ci.org/jeremenichelli/typeform-payload-helpers.svg?branch=master)](https://travis-ci.org/jeremenichelli/typeform-payload-helpers)

Helper functions to crawl form payload responses data from Typeform.

_This library is in beta since it needs stronger tests around different Typeform block types._

## Table of contents

- [Table of contents](#table-of-contents)
- [Motivations](#motivations)
- [Installation](#installation)
- [Usage](#usage)
  - [`getIdFromRef`](#getidfromref)
  - [`getAnswerFromId`](#getanswerfromid)
  - [`getAnswerValue`](#getanswervalue)
  - [`getAnswerValueFromRef`](#getanswervaluefromref)
- [Contributing](#contributing)

## Motivations

The payload of a webhook from Typeform contains a **definition** property which holds an array of field descriptors and an array of the **answers** from the respondent.

A field descriptor looks similar to this:

**payload object**

```json
{
  "definition": {
    "fields": [
      {
        "id": "JwWggjAKtOkA",
        "title": "What is your first name?",
        "type": "short_text",
        "ref": "fhg908-ewb047-gfp261-mxw563",
        "allow_multiple_selections": false,
        "allow_other_choice": false
      }
    ]
  },
  "answers": [ ]
}
```

The answer to that field will contain the type, value and the reference of the field:

**payload object**

```json
{
  "definition": {
    "fields": [ ]
  },
  "answers": [
    {
      "type": "text",
      "text": "Laura",
      "field": {
        "id": "JwWggjAKtOkA",
        "type": "short_text"
      }
    }
  ]
}
```

When processing these responses, it can be difficult to identify to which question the answer belongs, but we can use Typeform's Create API to `PUT` a new version of the form definition with more readable `ref` values we can access to.

_Read more about this in [Typeform's developer portal](https://developer.typeform.com/create/reference/update-form/)._

Once we have more readable **refs** in our form definition we can use it to get the field id from it, and with that id get the answer block.

In order to make this process less repetitive and avoid copy pasting the same approach when processing responses, this library provides a set of helpers available for web or node applications.


## Installation

Add it to your application using a package manager.

```sh
# npm
npm i typeform-payload-helpers --save

# yarn
yarn add typeform-payload-helpers
```

## Usage

### `getIdFromRef`

Given a `ref` string and an object containing the form `definition` returns the corresponding field `id`.

```js
import { getIdFromRef } from 'typeform-payload-helpers';

getIdFromRef('first_name', payload);
// returns 'JwWggjAKtOkA'
```

### `getAnswerFromId`

Given an `id` and an object containing the form `definition` and an `answers` array returns the corresponding answer block.

```js
import { getAnswerFromId } from 'typeform-payload-helpers';

getAnswerFromId('JwWggjAKtOkA', payload);

//  returns {
//     "type": "text",
//     "text": "Laura",
//     "field": {
//       "id": "JwWggjAKtOkA",
//       "type": "short_text"
//     }
//   }
```

### `getAnswerValue`

Given an `answer` object returns the corresponding response value.

```js
import { getAnswerValue } from 'typeform-payload-helpers';

const answer = {
  type: 'text',
  text: 'Laura',
  field: {
    id: 'JwWggjAKtOkA',
    type: 'short_text'
  }
};

getAnswerValue(answer);
// 'Laura'
```

### `getAnswerValueFromRef`

This method groups all helpers from above and, given a `ref` string and a payload object containing both the `definition` and the `answers` array, returns the value of the corresponding answer.

```js
import { getAnswerValueFromRef } from 'typeform-payload-helpers';

getAnswerValueFromRef('first_name', payload);
// 'Laura'
```

#### About the payload parameter

Notice that all **payload** parameters have the same structure as an object received from a Webhooks post. You can see [an example on the platform's documentation](https://developer.typeform.com/webhooks/example-payload/).

If you have a form definition stored in other format pass it inside an object.

```js
import { getIdFromRef } from 'typeform-payload-helpers';
import customFormDefinition from './custom-form-definition.js'

// pass the object with the 'definition' property name
getIdFromRef('some_custom_ref', { definition: customFormDefinition });
```

## Contributing

This repository use `yarn` for managind the dependencies.

- Clone or fork this repository.
- Run `yarn` to install the dependencies.
- Apply your fixes or features.

_Update or add tests if necessary._

- Run `yarn test` to make sure there's no regression.
- Submit a PR 🎉

_You can do `yarn test --watch` when working on TDD mode._

### TODO

- Add stronger tests against more complex blocks.
- Add useful links to documentation.
- Add linting and precommit hooks.
