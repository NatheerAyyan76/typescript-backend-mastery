Types & Interfaces in TypeScript

(Type)
يستخدم لتحديد نوع البيانات او شكلها
بمعنى:
هو الطريقة التي نحدد بها نوع المتغير او الدالة او القيمة

### لماذا نستخدم ال types

- منع الأخطاء قبل التشغيل (Runtime Errors)
- تحسين قراءة الكود (Readability)
- يحسن تجربة التطوير (Autocomplete / Refactoring) // تعديل الكود بشكل امن Ref..

مثال

```
 let age: number = 5;
 type Id: string | number // Union Type
```

(Interface)

هو الهيكل الاساسي يحدد شكل ال object ويحتوي على خصائص محددة باانواع محددة

لماذا نستخدم Interfaces

- توحيد وتنظيم شكل البيانات
- ضمان عدم نسيان أي خصائص مطلوبة
- تسهيل التعامل بين الطبقات (Controller / Service / Database)

مثال:

    interface User {
    id: number;
    name: string;
    }

أهمية Types & Interfaces في Backend (NestJS)

يتم اعتماد ال Type and Interface بشكل اساسي على

تعريف DTO (Data Transfer Object)
تحديد شكل البيانات القادمة (Request)
تحديد شكل البيانات الخارجة (Response)
ضمان التوافق بين:
Controller
Service
Database

هذا يساعد على تقليل الأخطاء وجعل النظام أكثر وضوحا وقابلية للصيانة

تلخيص

1. Object Declaration
   Both define the shape of an object. Type uses an equals sign (=).

type UserType = {
name: string;
age: number
}

interface UserInterface {
name: string;
age: number
}

2. Primitives
   Used to alias basic data types. Only supported by Type.

Type:

type User = string;
const myName: User = "Natheer";
console.log(myName); // Natheer

Interface:

// Interface does NOT support primitives

3. Union Types (|)
   Used to allow multiple types for a single value. Only supported by Type.

type ID = string | number
const userID1: ID = "A-10";
const userID2: ID = 10;

4. Extending
   Used to inherit properties from another shape.

Type (uses &):

type User = {
name: string;
} & {
age: number
}

Interface (uses extends):
Interface User {
name: string
}
interface Admin extends User {
role: string
}

5. Declaration Merging
   Defining the same name twice automatically merges the properties. Only supported by Interface.

Type:
type User = {name: string};
type User = {age: number }
Error: Duplicate identifier // User

Interface:

interface User { name: string; }
interface User { age: number; }
// Auto merges into: { name: string; age: number; }
