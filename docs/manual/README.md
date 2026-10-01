# CSG ERP Markdown Manual Package

This package contains a complete Markdown conversion of all 16 sections of the supplied CSG ERP User Manual.

## Main document

- `CSG_ERP_Complete_User_Manual.md` contains the complete manual in one file.
- `modules/` contains one Markdown file for each top-level section and is recommended for MkDocs navigation and RAG ingestion.
- `assets/complete-manual/` contains the extracted source screenshots.

## Modules

1. [1. Introduction](modules/01-introduction.md)
2. [2. Login](modules/02-login.md)
3. [3. Dashboard](modules/03-dashboard.md)
4. [4. Account Center](modules/04-account-center.md)
5. [5. User Management](modules/05-user-management.md)
6. [6. Channel Management](modules/06-channel-management.md)
7. [7. Product](modules/07-product.md)
8. [8. Logistics](modules/08-logistics.md)
9. [9. Inbound](modules/09-inbound.md)
10. [10. Inventory](modules/10-inventory.md)
11. [11. Outbound](modules/11-outbound.md)
12. [12. Returns Management](modules/12-returns-management.md)
13. [13. Report](modules/13-report.md)
14. [14. Billing & Invoice](modules/14-billing-and-invoice.md)
15. [15. Ticket](modules/15-ticket.md)
16. [16. Appendix](modules/16-appendix.md)

## MkDocs navigation

Add the following entries under `nav:` in `mkdocs.yml`:

```yaml
  - CSG ERP User Manual:
      - "1. Introduction": "modules/01-introduction.md"
      - "2. Login": "modules/02-login.md"
      - "3. Dashboard": "modules/03-dashboard.md"
      - "4. Account Center": "modules/04-account-center.md"
      - "5. User Management": "modules/05-user-management.md"
      - "6. Channel Management": "modules/06-channel-management.md"
      - "7. Product": "modules/07-product.md"
      - "8. Logistics": "modules/08-logistics.md"
      - "9. Inbound": "modules/09-inbound.md"
      - "10. Inventory": "modules/10-inventory.md"
      - "11. Outbound": "modules/11-outbound.md"
      - "12. Returns Management": "modules/12-returns-management.md"
      - "13. Report": "modules/13-report.md"
      - "14. Billing & Invoice": "modules/14-billing-and-invoice.md"
      - "15. Ticket": "modules/15-ticket.md"
      - "16. Appendix": "modules/16-appendix.md"
```

Keep the `modules` and `assets` directories in the same relative positions so all screenshots remain available.

## RAG ingestion

For retrieval-augmented generation, ingest the files in `modules/` as separate documents. The complete manual can be retained as a human-readable master copy.
