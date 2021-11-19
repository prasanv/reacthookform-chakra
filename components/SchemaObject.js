const schema = {
  "$schema": "http://json-schema.org/draft-04/schema",
  "title": "Signup Extended",
  "description": "Schema definition for signup extended page end point on member_service",
  "type": "object",
  "required": [
    "email_address",
    "password"
  ],
  "properties": {
    "ip_address": {
      "type": "string"
    },
    "email_address": {
      "description": "Email Address",
      "maxLength": 255,
      "allOf": [
        {
          "not": {
            "anyOf": [
              {
                "type": "string",
                "pattern": "^.*@[Mm][Oo][Gg][Oo][Mm][Oo][Nn][Ee][Yy].[Cc][Oo][Mm]"
              },
              {
                "type": "string",
                "pattern": "^.*@[Mm][Oo][Gg][Oo].[Cc][Aa]"
              }
            ]
          }
        },
        {
          "type": "string",
          "pattern": "^\\S+@\\S+\\.[\\S+]{2,63}$"
        }
      ]
    },
    "password": {
      "description": "Password",
      "type": "string",
      "minLength": 8,
      "maxLength": 120,
      "allOf": [
        {
          "pattern": "[a-zA-Zéàèùçâêîôûëöüœ]+"
        },
        {
          "pattern": "[!@#$%^&(*)_\\d]+"
        }
      ]
    },
    "marketing_opt_in": {
      "description": "Opt In Marketing",
      "type": "boolean"
    },
    "agree_to_privacy_policy_and_terms_of_use": {
      "description": "Agreed the Privacy Policy and Terms of Use",
      "type": "boolean"
    },
    "source_of_consent": {
      "description": "Where in the application the user consented",
      "type": "string"
    },
    "include_token_in_body": {
      "description": "Parameter to help with QA testing. Includes token in body for some requests.",
      "type": "boolean"
    },
    "promo_code": {
      "description": "Promo Code",
      "type": "string",
      "minLength": 1
    },
    "referrer_code": {
      "description": "Code received as referral from an existing Mogo member",
      "type": "string"
    },
    "affiliate_code": {
      "description": "Code received from the affiliate to identify a lead",
      "type": "string"
    },
    "attribution_code": {
      "description": "Attribution Code",
      "type": "string"
    },
    "attribution_partner_id": {
      "description": "Attribution Partner ID",
      "type": "string"
    },
    "first_name": {
      "description": "first name",
      "type": "string",
      "pattern": "^[A-Za-z-'.éàèùçâêîôûëöüœ ]+$",
      "minLength": 2,
      "maxLength": 25
    },
    "last_name": {
      "description": "last name",
      "type": "string",
      "pattern": "^[A-Za-z-'éàèùçâêîôûëöüœ ]+$",
      "minLength": 2,
      "maxLength": 25
    },
    "address": {
      "description": "Street Address - PATTERN MUTATED ON HTTP SERVICE OUTPUT. ^((?!\\b[p]*(ost)*\\.*\\s*[o|0]*(ffice)*\\.*\\s*b[o|0]x\\b).)*$/i",
      "type": "string",
      "minLength": 4,
      "maxLength": 50
    },
    "city": {
      "description": "City of Residence",
      "type": "string",
      "minLength": 3,
      "maxLength": 20
    },
    "suite": {
      "description": "Suite number",
      "type": "string",
      "pattern": "^$|^[A-Za-z0-9-.,#/ ]+$",
      "maxLength": 50
    },
    "province": {
      "description": "Province of Residence",
      "type": "string",
      "pattern": "^([Aa][Bb]|[Bb][Cc]|[Oo][Nn]|[Mm][Bb]|[Nn][Bb]|[Nn][Ll]|[Nn][Ss]|[Nn][Tt]|[Nn][Uu]|[Pp][Ee]|[Qq][Cc]|[Ss][Kk]|[Yy][Tt])$"
    },
    "postal_code": {
      "description": "Postal Code",
      "type": "string",
      "pattern": "^[ABCEGHJKLMNPRSTVXY]\\d[ABCEGHJKLMNPRSTVWXYZ]( )?\\d[ABCEGHJKLMNPRSTVWXYZ]\\d$"
    },
    "birth_date": {
      "description": "Date of Birth",
      "type": "string",
      "pattern": "^[0-9]{4}-[0-9]{2}-[0-9]{2}$"
    },
    "requested_credit_amount": {
      "description": "How much credit would you like?",
      "type": "number",
      "enum": [0, 500, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000,
               10000, 11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000,
               20000, 21000, 22000, 23000, 24000, 25000, 26000, 27000, 28000, 29000,
               30000, 31000, 32000, 33000, 34000, 35000]
    },
    "credit_purpose": {
      "description": "Purpose of Credit",
      "type": "string",
      "enum": ["Credit Card Refinancing/Pay Off Credit Cards", "Debt Consolidation",
               "Home Improvements/Moving Expenses", "Car Financing/Loan",
               "Small Business Expense", "Vacation/Travel", "Tuition/Student Loans",
               "Emergency Loan", "Medical/Dental Expenses", "Household Expenses",
               "Other Purpose"]
    }
  }
}

export default schema;