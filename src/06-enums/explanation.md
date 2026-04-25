# 06 - Enums في TypeScript

enum في TypeScript تستخدم لتعريف مجموعة قيم ثابتة باسم واضح.

بدل ما نكتب النصوص المتكررة يدويًا، نستخدم enum لحماية الكود من الأخطاء الإملائية وتوحيد القيم.

## أنواع Enums

### 1) String Enum


enum OrderStatus {
  Pending = "PENDING",
  Paid = "PAID",
}


ممتازة لل  APIs وال Logs لأنها واضحة ومقروءة.

### 2) Numeric Enum


enum UserRole {
  User, // 0
  Admin, // 1
}


تعطي قيما رقمية تلقائيا (إلا إذا حددتها يدويا).

## لماذا نستخدم Enum؟

- توحيد القيم الثابتة عبر المشروع
- تقليل الأخطاء الناتجة عن كتابة strings بشكل يدوي
- تحسين القراءة والصيانة

## متى قد أستخدم بديل؟

في بعض الحالات البسيطة، يمكن استخدام Union Literal Types بدل enum:


type Status = "PENDING" | "PAID" | "SHIPPED";
