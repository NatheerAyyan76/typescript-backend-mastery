# 03 - Optional و Readonly في TypeScript

في TypeScript يوجد كلمتان مهمتان عند تصميم الـ Types:

- ? لجعل الخاصية اختيارية (Optional)
- readonly لجعل الخاصية غير قابلة لاعادة التعيين بعد الانشاء

# 1) Optional Property

عند وضع ? بعد اسم الخاصية، تصبح هذه الخاصية غير مطلوبة عند انشاء الكائن.

ts
type UpdateUserDTO = {
  email?: string;
  phone?: string;
};


هذا مفيد في عمليات التحديث (Update) لأنك غالبا لا تريد ارسال كل الحقول.

# 2) Readonly Property

readonly تعني أنه لا يمكن تغيير قيمة الخاصية بعد انشاء الكائن.

ts
type User = {
  readonly id: string;
  name: string;
};


ts
const user: User = { id: "u_1", name: "Ali" };
user.name = "Natheer Ayyan"; // OK
// user.id = "u_2"; // Error


# لماذا نستخدم Optional و Readonly؟

- تقليل الأخطاء أثناء التطوير
- حماية الحقول الحساسة مثل id و createdAt


# ملاحظة مهمة

readonly حماية على مستوى TypeScript فقط (وقت التطوير).
أما وقت التشغيل (Runtime) فهو لا يجمد الكائن تلقائيا إلا اذا استخدمت آليات إضافية مثل Object.freeze
