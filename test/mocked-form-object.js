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
      },
      {
        "id": "sdkOpd2LdBan",
        "title": "What stuff do you like from web development?",
        "type": "multiple_choice",
        "allow_multiple_selections": true,
        "allow_other_choice": true,
        "ref": "readable_ref_technologies",
        "properties": {},
        "choices": [
          {
            "id": "wvMzzbGurKFs",
            "label": "CSS"
          },
          {
            "id": "l76tpzmYPJme",
            "label": "JavaScript"
          },
          {
            "id": "w0ixrBwlYUqT",
            "label": "NodeJS"
          },
          {
            "id": "KkVRb5zUfrgF",
            "label": "React"
          },
          {
            "id": "A5YAkoNrZ62j",
            "label": "Vue"
          },
          {
            "id": "zXEhONvga5dW",
            "label": "Open Source"
          }
        ]
      },
      {
        "id": "cg0OapF8AOMu",
        "title": "Where are you from?",
        "type": "dropdown",
        "ref": "readable_ref_place",
        "properties": {}
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
    {
      "type": "choices",
      "choices": {
        "labels": [
          "Vue",
          "React",
          "CSS"
        ]
      },
      "field": {
        "id": "sdkOpd2LdBan",
        "type": "multiple_choice"
      }
    },
    {
      "type": "choice",
      "choice": {
        "label": "Barcelona"
      },
      "field": {
        "id": "cg0OapF8AOMu",
        "type": "dropdown"
      }
    }
  ]
};