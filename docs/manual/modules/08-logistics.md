
# 8. Logistics

The Logistics module maintains logistics-related configurations used when warehouse orders are dispatched through available delivery services.

## 8.1 Overview

The logistics module allows users to view and manage logistics providers, courier services, and postcode mappings available in the CSG system.

This module is mainly used to:

• View available logistics providers • Check courier service configurations • Verify service availability and status • Manage postcode mappings used for shipping allocation • Support order fulfillment and carrier selection

The logistics module includes:

• Logistics Provider • Logistics Service • Postcode

## 8.2 Logistics Provider

### 8.2.1 Overview

![Overview screen in the CSG Customer Portal](../assets/complete-manual/08-logistics/08-logistics-001.png)

*Figure 1. Overview screen from the CSG ERP User Manual.*

Navigation

The Logistics Provider page displays all logistics companies configured in the system.

Users can search and view provider information.

### 8.2.2 Search Filters

Users can search logistics providers by:

| Field | Description |
| --- | --- |
| Logistics Provider | Logistics company name |
| Status | Provider status |

### 8.2.3 Logistics Provider Information

The Logistics Provider table displays the following information.

| Column | Description |
| --- | --- |
| Logistics Provider | Name of the logistics company |
| Status | Provider availability |
| Created By | User who created the provider record |
| Date Created | Record creation date |

### 8.2.4 Status

| Status | Description |
| --- | --- |
| Enable | Provider is available for use |
| Disable | Provider is unavailable for selection |

## 8.3 Logistics Service

### 8.3.1 Overview

Navigation

The Logistics Service page displays courier services available under each logistics provider.

Users can view service information and verify service availability.

![Overview screen in the CSG Customer Portal](../assets/complete-manual/08-logistics/08-logistics-002.png)

*Figure 2. Overview screen from the CSG ERP User Manual.*

### 8.3.2 Search Filters

Users can search courier services by:

| Field | Description |
| --- | --- |
| Courier Service Code | Service identifier |
| Courier Service Name | Service name |
| Logistics Provider | Related logistics provider |
| API Status | API connection status |
| CSG Status | Service status within CSG |

### 8.3.3 Logistics Service Information

The Logistics Service table displays the following information.

| Column | Description |
| --- | --- |
| Courier Service Code | Courier service code |
| Courier Service Name | Courier service name |
| Logistics Provider | Associated logistics provider |
| API Status | Courier API connection status |
| CSG Status | Service status in CSG |
| Date Created | Record creation date |

### 8.3.4 Service Status

API Status

| Status | Description |
| --- | --- |
| Connected | API connection is active |
| Disconnected | API connection unavailable |
| Pending | Connection validation in progress |

CSG Status

| Status | Description |
| --- | --- |
| Enable | Service is available for shipment creation |
| Disable | Service cannot be used |

## 8.4 Postcode

### 8.4.1 Overview

Navigation

The Postcode page displays postcode information used for logistics routing and service matching.

Users can search postcode records and verify delivery coverage.

![Overview screen in the CSG Customer Portal](../assets/complete-manual/08-logistics/08-logistics-003.png)

*Figure 3. Overview screen from the CSG ERP User Manual.*

### 8.4.2 Postcode Information

Depending on system configuration, postcode records may include:

| Column | Description |
| --- | --- |
| Postcode | Postal code |
| State | State or region |
| Suburb | Delivery suburb |
| Logistics Provider | Assigned logistics provider |
| Courier Service | Available courier service |
| Status | Record status |

### 8.4.3 Usage

Postcode mappings are used to:

- Determine delivery coverage
- Match available courier services
- Support shipping rate calculations
- Assist automatic logistics allocation

## Source

CSG ERP User Manual, section 8, "Logistics".
