# 08 - Classes في TypeScript

ال  Class تجمع البيانات (properties) والسلوك (methods) داخل كيان واحد.


## 1) Constructor

الـ constructor يُستخدم لتهيئة الكائن عند إنشائه:

```ts
class User {
  constructor(
    public id: string,
    public name: string,
  ) {}
}
```

## 2) Access Modifiers

- `public`: متاح من أي مكان
- `private`: متاح فقط داخل نفس الكلاس
- `protected`: متاح داخل الكلاس والكلاسات الموروثة

## 3) Inheritance

يمكن لكلاس أن يرث من كلاس آخر باستخدام `extends`.
هذا يفيد لإعادة استخدام المنطق المشترك.

## 4) readonly و static

- `readonly`: خاصية لا يمكن تعديلها بعد الإنشاء
- `static`: خاصية/دالة مرتبطة بالكلاس نفسه وليس بل  instance

## 5) Abstract Classes

الكلاس abstract لا يمكن إنشاء object منه مباشرة.
يستخدم كقاعدة عامة يجب أن تُكملها الكلاسات المشتقة.

