[show-more-less](README.md) / Exports

# show-more-less

## Table of contents

### Type aliases

- [ClassesObject](undefined)
- [OnExpand](undefined)
- [ShowMoreLessProps](undefined)

### Functions

- [default](undefined)

## Type aliases

### ClassesObject

Ƭ **ClassesObject**: `Object`

**`property`** {string} root - an optional style class at the root level

**`property`** {string} text - an optional style class at the text level

**`property`** {string} clickable - an optional style class at the show more/less text level

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clickable?` | string |
| `root?` | string |
| `text?` | string |

#### Defined in

[index.tsx:16](https://github.com/iamdipanshusingh/ShowMoreLess-React/blob/4aacf15/src/index.tsx#L16)

___

### OnExpand

Ƭ **OnExpand**: Function

#### Type declaration

▸ (`value`): void

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | boolean | This is the updated value, passed as a param |

##### Returns

void

#### Defined in

[index.tsx:8](https://github.com/iamdipanshusingh/ShowMoreLess-React/blob/4aacf15/src/index.tsx#L8)

___

### ShowMoreLessProps

Ƭ **ShowMoreLessProps**: `Object`

**`property`** {string} text - text to be shown

**`property`** {string} [showMoreLabel="...Show More"] - an optional label text for show more

**`property`** {string} [showLessLabel="Show Less"] - an optional label text for show less

**`property`** {string} classes - an optional ClassesObject, for style

**`property`** {string} [threshold=100] - an optional param, a point after which the text will be trimmed

**`property`** {string} [expanded=false] - an optional param, determines whether the text is expanded or not

**`property`** {string} onExpand - an optional param, a callback function called on clicking show more/less text

#### Type declaration

| Name | Type |
| :------ | :------ |
| `classes?` | ClassesObject |
| `expanded?` | boolean |
| `onExpand?` | OnExpand |
| `showLessLabel?` | string |
| `showMoreLabel?` | string |
| `text` | string |
| `threshold?` | number |

#### Defined in

[index.tsx:32](https://github.com/iamdipanshusingh/ShowMoreLess-React/blob/4aacf15/src/index.tsx#L32)

## Functions

### default

▸ **default**(`__namedParameters`): Element

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | ShowMoreLessProps |

#### Returns

Element

#### Defined in

[index.tsx:42](https://github.com/iamdipanshusingh/ShowMoreLess-React/blob/4aacf15/src/index.tsx#L42)
