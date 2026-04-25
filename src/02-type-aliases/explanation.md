# 02 - Type Aliases in TypeScript

Type Alias
يستخدم لاعطاء اسم واضح وقابل لاعادة الاستخدام لاي نوع بيانات في 

بمعنى:
بدل ما تكرر نفس النوع اكثر من مرة, تعر فه مرة واحدة ثم تستخدمه في كل المشروع.

## لماذا نستخدم Type Aliases

- تحسين وضوح الكود (Readability)
- تقليل التكرار (Duplication)
- تنظيم نماذج البيانات في مشاريع Backend
- تسهيل الصيانة عند تغيير النوع لاحقا

## امثلة سريعة

```ts
type UserId = string | number;
type Username = string;

type User = {
  id: UserId;
  name: Username;
  email: string;
};
```



1. Primitive Aliases

```ts
type Price = number;
type Email = string;
```

2. Union Aliases

```ts
type User = "admin" | "user" ;
```

3. Object Aliases (DTO Style)

```ts
type CreateUserDTO = {
  name: string;
  email: string;
};
```

4. Function Aliases

```ts
type Formatter = (value: string) => string;
```

## Type Alias vs Interface

- Type مناسب جدا للـ union, primitive aliases, function signatures.
- Interface مناسب اكثر لو كنت تريد declaration merging او بنية object قابلة للتوسعة بشكل متكرر.

عمليا في مشاريع TypeScript Backend:

- استخدم Type عندما تحتاج مرونة اعلى في بناء الانواع.
- استخدم Interface عندما تعمل على عقود واضحة بين الطبقات.

