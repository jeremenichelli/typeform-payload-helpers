export default {
  "definition": {
    "title": "typeform helpers mocked form object",
    "fields": [
      {
        "id": "JwWggjAKtOkA",
        "title": "What is your first name?",
        "type": "short_text",
        "ref": "readable_ref_short_text",
        "allow_multiple_selections": false,
        "allow_other_choice": false
      },
      {
        "id": "SMEUb7VJz92Q",
        "title": "Please give us your email address.",
        "type": "email",
        "ref": "readable_ref_email",
        "allow_multiple_selections": false,
        "allow_other_choice": false
      }
    ]
  },
  "answers": [
    {
      "type": "text",
      "text": "Laura",
      "field": {
        "id": "JwWggjAKtOkA",
        "type": "short_text"
      }
    },
    {
      "type": "email",
      "email": "laura@example.com",
      "field": {
        "id": "SMEUb7VJz92Q",
        "type": "email"
      }
    },
  ]
};