# 04 - Union و Intersection في TypeScript

## Union (|)

ال Union يعني أن القيمة يمكن أن تكون نوعا من عدة أنواع.


type UserId = string | number;


UserId يمكن أن يكون string أو number

### Discriminated Union



type Success = { status: "success"; data: string };
type Failure = { status: "failure"; error: string };
type Result = Success | Failure;



## Intersection (&)

ال Intersection يدمج أكثر من Type في Type واحد.


type User = { id: string; name: string };
type Auditable = { createdAt: Date; sentBy: string };
type Notification = User & Auditable;
