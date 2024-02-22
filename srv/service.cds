using db from '../db/schema';

service MyService {
    entity employee as projection on db.employee;

}