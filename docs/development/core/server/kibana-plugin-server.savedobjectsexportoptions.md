<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [kibana-plugin-server](./kibana-plugin-server.md) &gt; [SavedObjectsExportOptions](./kibana-plugin-server.savedobjectsexportoptions.md)

## SavedObjectsExportOptions interface

Options controlling the export operation.

<b>Signature:</b>

```typescript
export interface SavedObjectsExportOptions 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [excludeExportDetails](./kibana-plugin-server.savedobjectsexportoptions.excludeexportdetails.md) | <code>boolean</code> | flag to not append [export details](./kibana-plugin-server.savedobjectsexportresultdetails.md) to the end of the export stream. |
|  [exportSizeLimit](./kibana-plugin-server.savedobjectsexportoptions.exportsizelimit.md) | <code>number</code> | the maximum number of objects to export. |
|  [includeReferencesDeep](./kibana-plugin-server.savedobjectsexportoptions.includereferencesdeep.md) | <code>boolean</code> | flag to also include all related saved objects in the export stream. |
|  [namespace](./kibana-plugin-server.savedobjectsexportoptions.namespace.md) | <code>string</code> | optional namespace to override the namespace used by the savedObjectsClient. |
|  [objects](./kibana-plugin-server.savedobjectsexportoptions.objects.md) | <code>Array&lt;{</code><br/><code>        id: string;</code><br/><code>        type: string;</code><br/><code>    }&gt;</code> | optional array of objects to export. |
|  [savedObjectsClient](./kibana-plugin-server.savedobjectsexportoptions.savedobjectsclient.md) | <code>SavedObjectsClientContract</code> | an instance of the SavedObjectsClient. |
|  [search](./kibana-plugin-server.savedobjectsexportoptions.search.md) | <code>string</code> | optional query string to filter exported objects. |
|  [types](./kibana-plugin-server.savedobjectsexportoptions.types.md) | <code>string[]</code> | optional array of saved object types. |

