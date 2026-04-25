# 05 - Generics في TypeScript

الـ Generics تسمح لنا بكتابة كود مرن وقابل لاعادة الاستخدام بدون خسارة الـ Type Safety.

بمعنى بسيط:
بدل أن نكتب نفس الدالة أو النوع لكل نوع بيانات، نكتبها مرة واحدة باستخدام T.

## الفكرة الأساسية


function identity<T>(value: T): T {
  return value;
}


T هنا يمثل نوعا عاما يتم تحديده وقت الاستخدام.

## أين نستخدم Generics؟

- في الدوال (Generic Functions)
- في الأنواع (Generic Type Aliases)
- في الواجهات (Generic Interfaces)
- في الكلاسات (Generic Classes)

## أمثلة 


type ApiResponse<T> = {
  success: boolean;
  data: T;
};



class Box<T> {
  constructor(public value: T) {}
}


## Generic Constraints

أحيانا نريد أن نسمح بأي نوع لكن بشرط وجود خصائص معينة.


type HasId = { id: string | number };

function getEntityId<T extends HasId>(entity: T) {
  return entity.id;
}


هنا T يجب أن يحتوي على id .

## الفائدة في مشاريع Backend

- بناء ApiResponse<T> موحد لكل endpoints
- بناء Repository<T> قابل لاعادة الاستخدام بين User, Product
- تقليل تكرار الكود مع الحفاظ على Types واضحة ودقيقة
