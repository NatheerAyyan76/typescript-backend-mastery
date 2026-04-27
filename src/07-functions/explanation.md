# 07 - Functions في TypeScript

الدوال  في TypeScript يمكن كتابتها بشكل آمن وواضح عبر تحديد أنواع:

- Parameters (مدخلات الدالة)
- Return Type (قيمة الإرجاع)

## 1) Parameter و Return Types

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

هذا يضمن أن الدالة تستقبل أرقاما وترجع رقمًا.

## 2) Function Type Alias

```ts
type MathOperation = (x: number, y: number) => number;
```

مفيد عندما تريد إعادة استخدام نفس شكل الدالة في أكثر من مكان.

## 3) Optional و Default Parameters

```ts
function greet(name: string, title?: string): string {}
function applyDiscount(price: number, discount: number = 0): number {}
```

- `?` يجعل البراميتر اختياريًا
- `=` يعطي قيمة افتراضية

## 4) Rest Parameters

```ts
function sum(...values: number[]): number {}
```

تستخدم لاستقبال عدد غير محدد من القيم.

## 5) Function Overload

تسمح بتعريف أكثر من توقيع لنفس الدالة.

```ts
function formatValue(value: string): string;
function formatValue(value: number): string;
```
