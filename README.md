1. What is a database? What are the types of databases?

A database is an organized collection of data that can be easily stored, accessed, managed, and updated.

Types of Databases:
Relational (SQL) → MySQL, PostgreSQL, Oracle
NoSQL
Document → MongoDB
Key-Value → Redis
Column → Cassandra
Graph → Neo4j
In-Memory → Redis
Distributed → DynamoDB
Time-Series → InfluxDB

2. Difference between SQL and NoSQL databases.
--> | Feature      | SQL         | NoSQL                  |
| ------------ | ----------- | ---------------------- |
| Schema       | Fixed       | Flexible               |
| Data Model   | Tables      | JSON, Key-Value, Graph |
| Scalability  | Vertical    | Horizontal             |
| Transactions | Strong ACID | BASE                   |
| Examples     | MySQL       | MongoDB                |

3. When would you choose SQL over NoSQL and vice versa?
Choose SQL when:
Data is structured
Relationships are complex
Financial or transactional systems
Strong consistency required

Choose NoSQL when:
Schema changes frequently
High scalability needed
Big data / real-time apps
Faster development

4. What is ACID? Explain each property.
--> ACID ensures reliable transactions.
Atomicity → All or nothing
Consistency → Valid state before & after transaction
Isolation → Transactions don’t interfere
Durability → Data persists after commit

5. What is BASE in NoSQL?
--> BASE focuses on availability over consistency.
Basically Available
Soft State
Eventually Consistent

6. What is database normalization? Explain 1NF, 2NF, 3NF.
--> Normalization reduces redundancy.
1NF

Atomic values
No repeating groups
2NF
1NF + no partial dependency
3NF
2NF + no transitive dependency

7. What is denormalization? When would you denormalize data?
--> Denormalization = intentionally adding redundancy for performance.
Used when:
Read-heavy systems
Faster queries needed
Analytics dashboards

8. What are database indexes? How do they improve performance?
--> Indexes are data structures (B-Tree, Hash) that improve search speed.
Example:
CREATE INDEX idx_email ON users(email);

9. What are the trade-offs of using indexes?
--> Slower writes
Extra storage
Maintenance overhead

Faster reads
Efficient filtering & sorting

10. What is a primary key? What is a foreign key?
--> Primary Key → Uniquely identifies a record
Foreign Key → References another table’s primary key