# 09 - Utility Types

Utility Types في TypeScript هي أدوات جاهزة لتعديل الأنواع الموجودة بدل كتابة أنواع جديدة يدويا.

## أهم Utility Types

- `Partial<T>`: يجعل كل الخصائص اختيارية
- `Required<T>`: يجعل كل الخصائص إجبارية
- `Readonly<T>`: يمنع تعديل الخصائص
- `Pick<T, K>`: اختيار خصائص محددة
- `Omit<T, K>`: حذف خصائص محددة
- `Record<K, V>`: إنشاء object type بمفاتيح وقيم محددة

## أمثلة 

```ts
type User = { id: string; name: string; email?: string };
type UpdateUserDTO = Partial<User>;
type UserPreview = Pick<User, "id" | "name">;
type UserWithoutEmail = Omit<User, "password">;
```

```ts
type Roles = "admin" | "user";
type Permissions = Record<Roles, string[]>;
```

const permissions: RolePermissions = {
  admin: ["create", "delete", "update"],
  user: ["read"],
};