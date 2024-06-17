class Job {
    constructor (name, industry, requiresDegree, requiresCertificate, field, salary) {
        this.name = name;
        this.industry = industry
        this.requiresDegree = requiresDegree;
        this.requiresCertificate = requiresCertificate;
        this.field = field;
        this.salary =salary;
    }
    getName() {
        return this.name;}
    getFieldAndIndustry() {
        return "Field: " + this.field + " Industry: " + this.industry;}
    getRequiresDegree() {
        return "Requires Degree" + this.requiresDegree;}
    getRequiresCertificate() {
        return "Requires Certificate" + this.requiresCertificate;}
    getSalary() {
        return "Salary" + this.salary;}
}

class MedicalBiller extends Job {
    constructor(name, industry, requiresDegree, requiresCertificate, field, salary) {
        super(name, industry, requiresDegree, requiresCertificate, field, salary);
        this.addReq = "ICD and CPT certificate";

    }
   
    getReq(){
        return this.addReq
    }
    
}

    let medicalCoder = new Job('Medical Coder', 'Medical', 'Yes', 'No', 'Healthcare Administration', '($50,000)');
    let transcriptionist = new Job('Transcriptionist', 'Medical', 'No', 'Yes', 'Healthcare', '($30,000)');
    let receptionist = new Job('Receptionist', 'Medical', 'No', 'No', 'Clerical', '($28,000)');
    let biller = new MedicalBiller ('Medical Biller', 'Medical', 'Yes', 'Yes', 'Billing', '($55,000)',);


    console.log(transcriptionist.getRequiresCertificate());
    console.log(biller.getReq());
    console.log(biller.getSalary());
    console.log(transcriptionist.getName());





