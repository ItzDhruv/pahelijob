'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Upload, FileText, Camera, PenTool, MapPin, Calendar, Phone, Mail, GraduationCap, Briefcase, User, Home, FileCheck, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const steps = [
  { id: 1, title: 'Personal Information', icon: User },
  { id: 2, title: 'Contact Details', icon: Phone },
  { id: 3, title: 'Education', icon: GraduationCap },
  { id: 4, title: 'Experience & Skills', icon: Briefcase },
  { id: 5, title: 'Documents', icon: FileText },
  { id: 6, title: 'Additional Information', icon: FileCheck }
];

// Add staticJobs here (copy from company page)
const staticJobs = [
  {
    title: 'Full Stack Developer (Python & React)',
    type: 'Full-time',
    experience: 'Fresher',
    salary: '4-7 LPA',
    location: 'Remote',
    posted: 'Just now',
    description: 'Work on both backend (Python) and frontend (React) for scalable web apps.',
    requirements: ['B.Tech/MCA', 'Python, Django/Flask', 'React.js', 'REST APIs'],
    responsibilities: ['Develop full stack apps', 'API integration', 'UI/UX collaboration', 'Testing']
  },
  {
    title: 'Java Backend Engineer',
    type: 'Full-time',
    experience: '0-2 years',
    salary: '5-8 LPA',
    location: 'Bangalore',
    posted: '1 hour ago',
    description: 'Build robust Java backend services for enterprise clients.',
    requirements: ['Java, Spring Boot', 'SQL/NoSQL', 'Microservices'],
    responsibilities: ['Backend development', 'Database design', 'API development', 'Code reviews']
  },
  {
    title: 'Data Scientist',
    type: 'Full-time',
    experience: 'Fresher',
    salary: '6-10 LPA',
    location: 'Hyderabad',
    posted: '2 hours ago',
    description: 'Analyze data and build ML models for business insights.',
    requirements: ['Python, Pandas', 'ML algorithms', 'Statistics'],
    responsibilities: ['Data analysis', 'Model building', 'Reporting', 'Collaboration']
  },
  {
    title: 'DevOps Engineer',
    type: 'Full-time',
    experience: '1+ years',
    salary: '5-9 LPA',
    location: 'Pune',
    posted: 'Today',
    description: 'Automate CI/CD pipelines and manage cloud infrastructure.',
    requirements: ['Linux', 'AWS/Azure', 'Docker/Kubernetes'],
    responsibilities: ['CI/CD setup', 'Cloud management', 'Monitoring', 'Automation']
  },
  {
    title: 'Frontend Engineer (React)',
    type: 'Full-time',
    experience: 'Fresher',
    salary: '3.5-6 LPA',
    location: 'Delhi NCR',
    posted: 'Today',
    description: 'Develop modern UIs using React and TypeScript.',
    requirements: ['React.js', 'TypeScript', 'HTML/CSS'],
    responsibilities: ['UI development', 'Component design', 'Performance optimization']
  },
  {
    title: 'Android Developer',
    type: 'Full-time',
    experience: '0-1 years',
    salary: '4-7 LPA',
    location: 'Remote',
    posted: 'Yesterday',
    description: 'Build Android apps for millions of users.',
    requirements: ['Kotlin/Java', 'Android SDK', 'REST APIs'],
    responsibilities: ['App development', 'UI/UX', 'Testing', 'Play Store deployment']
  },
  {
    title: 'iOS Developer',
    type: 'Full-time',
    experience: '0-1 years',
    salary: '4-7 LPA',
    location: 'Remote',
    posted: 'Yesterday',
    description: 'Develop iOS applications using Swift.',
    requirements: ['Swift', 'UIKit/SwiftUI', 'REST APIs'],
    responsibilities: ['App development', 'UI/UX', 'Testing', 'App Store deployment']
  },
  {
    title: 'QA Automation Engineer',
    type: 'Full-time',
    experience: 'Fresher',
    salary: '3-5 LPA',
    location: 'Chennai',
    posted: '2 days ago',
    description: 'Automate test cases and ensure product quality.',
    requirements: ['Selenium', 'Java/Python', 'Testing concepts'],
    responsibilities: ['Test automation', 'Bug reporting', 'Regression testing']
  },
  {
    title: 'UI/UX Designer',
    type: 'Full-time',
    experience: 'Fresher',
    salary: '3-6 LPA',
    location: 'Mumbai',
    posted: '2 days ago',
    description: 'Design user interfaces and experiences for web/mobile apps.',
    requirements: ['Figma/Adobe XD', 'Design principles', 'Portfolio'],
    responsibilities: ['UI design', 'Wireframing', 'User research']
  },
  {
    title: 'Cloud Engineer',
    type: 'Full-time',
    experience: '1+ years',
    salary: '6-11 LPA',
    location: 'Bangalore',
    posted: '3 days ago',
    description: 'Manage and optimize cloud infrastructure.',
    requirements: ['AWS/Azure/GCP', 'Terraform', 'Networking'],
    responsibilities: ['Cloud setup', 'Cost optimization', 'Security']
  },
  {
    title: 'Business Analyst',
    type: 'Full-time',
    experience: 'Fresher',
    salary: '3-5 LPA',
    location: 'Gurgaon',
    posted: '3 days ago',
    description: 'Bridge business requirements and tech teams.',
    requirements: ['Excel', 'Communication', 'Problem-solving'],
    responsibilities: ['Requirement gathering', 'Documentation', 'Stakeholder management']
  },
  {
    title: 'Product Manager',
    type: 'Full-time',
    experience: '1+ years',
    salary: '8-15 LPA',
    location: 'Remote',
    posted: '4 days ago',
    description: 'Lead product development and strategy.',
    requirements: ['Product lifecycle', 'Leadership', 'Agile'],
    responsibilities: ['Roadmap planning', 'Team coordination', 'Market research']
  }
];

function slugToJob(slug: string) {
  // Slug format: company-job-title
  // Extract job part and match to staticJobs
  const jobSlug = slug.split('-').slice(1).join(' ');
  return staticJobs.find(job => job.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === jobSlug.replace(/[^a-z0-9]+/g, '-'));
}

export async function generateStaticParams() {
  const companies = ['tcs', 'infosys', 'techcorp-47', 'techcorp-85'];
  return companies.map(slug => ({ slug }));
}

export default function ApplicationPage({ params }: { params: { slug: string } }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    middleName: '',
    lastName: '',
    fatherName: '',
    motherName: '',
    dateOfBirth: '',
    gender: '',
    maritalStatus: '',
    nationality: '',
    religion: '',
    category: '',
    bloodGroup: '',
    
    // Contact Details
    email: '',
    phone: '',
    alternatePhone: '',
    currentAddress: '',
    permanentAddress: '',
    city: '',
    state: '',
    pincode: '',
    country: '',
    
    // Education
    tenthBoard: '',
    tenthSchool: '',
    tenthPercentage: '',
    tenthYearOfPassing: '',
    twelfthBoard: '',
    twelfthSchool: '',
    twelfthPercentage: '',
    twelfthYearOfPassing: '',
    graduationUniversity: '',
    graduationCollege: '',
    graduationDegree: '',
    graduationSpecialization: '',
    graduationPercentage: '',
    graduationYearOfPassing: '',
    
    // Experience & Skills
    internshipCompany: '',
    internshipRole: '',
    internshipDuration: '',
    projectTitle: '',
    projectDescription: '',
    technicalSkills: '',
    programmingLanguages: '',
    certifications: '',
    achievements: '',
    
    // Documents
    passportPhoto: null,
    resume: null,
    tenthMarksheet: null,
    twelfthMarksheet: null,
    graduationMarksheet: null,
    idProof: null,
    signature: null,
    
    // Additional Information
    currentCTC: '',
    expectedCTC: '',
    noticePeriod: '',
    willingToRelocate: '',
    preferredLocation: '',
    referralName: '',
    referralContact: '',
    additionalInfo: '',
    agreeToTerms: false
  });

  const job = slugToJob(params.slug);
  const jobTitle = job ? job.title : params.slug.split('-').slice(-1)[0];
  const companyName = job ? job.title.split('(')[0].trim() : params.slug.split('-')[0];
  const progress = (currentStep / steps.length) * 100;

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (field: string, file: File | null) => {
    setFormData(prev => ({ ...prev, [field]: file }));
    if (file) {
      toast.success(`${field} uploaded successfully!`);
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    toast.success('Application submitted successfully! We will reach out to you soon.');
    // Redirect to thank you page after 2 seconds
    setTimeout(() => {
      window.location.href = '/application-submitted';
    }, 2000);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <User className="h-5 w-5" />
              Personal Information
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <Label htmlFor="middleName">Middle Name</Label>
                <Input
                  id="middleName"
                  value={formData.middleName}
                  onChange={(e) => handleInputChange('middleName', e.target.value)}
                  placeholder="Enter your middle name"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  placeholder="Enter your last name"
                />
              </div>
              <div>
                <Label htmlFor="fatherName">Father's Name *</Label>
                <Input
                  id="fatherName"
                  value={formData.fatherName}
                  onChange={(e) => handleInputChange('fatherName', e.target.value)}
                  placeholder="Enter your father's name"
                />
              </div>
              <div>
                <Label htmlFor="motherName">Mother's Name *</Label>
                <Input
                  id="motherName"
                  value={formData.motherName}
                  onChange={(e) => handleInputChange('motherName', e.target.value)}
                  placeholder="Enter your mother's name"
                />
              </div>
              <div>
                <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="gender">Gender *</Label>
                <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="maritalStatus">Marital Status</Label>
                <Select value={formData.maritalStatus} onValueChange={(value) => handleInputChange('maritalStatus', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select marital status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Single</SelectItem>
                    <SelectItem value="married">Married</SelectItem>
                    <SelectItem value="divorced">Divorced</SelectItem>
                    <SelectItem value="widowed">Widowed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="nationality">Nationality *</Label>
                <Input
                  id="nationality"
                  value={formData.nationality}
                  onChange={(e) => handleInputChange('nationality', e.target.value)}
                  placeholder="Enter your nationality"
                />
              </div>
              <div>
                <Label htmlFor="religion">Religion</Label>
                <Input
                  id="religion"
                  value={formData.religion}
                  onChange={(e) => handleInputChange('religion', e.target.value)}
                  placeholder="Enter your religion"
                />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General</SelectItem>
                    <SelectItem value="obc">OBC</SelectItem>
                    <SelectItem value="sc">SC</SelectItem>
                    <SelectItem value="st">ST</SelectItem>
                    <SelectItem value="ews">EWS</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="bloodGroup">Blood Group</Label>
                <Select value={formData.bloodGroup} onValueChange={(value) => handleInputChange('bloodGroup', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select blood group" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="a+">A+</SelectItem>
                    <SelectItem value="a-">A-</SelectItem>
                    <SelectItem value="b+">B+</SelectItem>
                    <SelectItem value="b-">B-</SelectItem>
                    <SelectItem value="ab+">AB+</SelectItem>
                    <SelectItem value="ab-">AB-</SelectItem>
                    <SelectItem value="o+">O+</SelectItem>
                    <SelectItem value="o-">O-</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Contact Details
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <Label htmlFor="alternatePhone">Alternate Phone</Label>
                <Input
                  id="alternatePhone"
                  value={formData.alternatePhone}
                  onChange={(e) => handleInputChange('alternatePhone', e.target.value)}
                  placeholder="Enter alternate phone number"
                />
              </div>
              <div>
                <Label htmlFor="country">Country *</Label>
                <Input
                  id="country"
                  value={formData.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                  placeholder="Enter your country"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="currentAddress">Current Address *</Label>
              <Textarea
                id="currentAddress"
                value={formData.currentAddress}
                onChange={(e) => handleInputChange('currentAddress', e.target.value)}
                placeholder="Enter your current address"
                rows={3}
              />
            </div>
            
            <div>
              <Label htmlFor="permanentAddress">Permanent Address *</Label>
              <Textarea
                id="permanentAddress"
                value={formData.permanentAddress}
                onChange={(e) => handleInputChange('permanentAddress', e.target.value)}
                placeholder="Enter your permanent address"
                rows={3}
              />
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  placeholder="Enter your city"
                />
              </div>
              <div>
                <Label htmlFor="state">State *</Label>
                <Input
                  id="state"
                  value={formData.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                  placeholder="Enter your state"
                />
              </div>
              <div>
                <Label htmlFor="pincode">Pincode *</Label>
                <Input
                  id="pincode"
                  value={formData.pincode}
                  onChange={(e) => handleInputChange('pincode', e.target.value)}
                  placeholder="Enter your pincode"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Educational Qualifications
            </h3>
            
            {/* 10th Standard */}
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-4">10th Standard / Secondary School</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="tenthBoard">Board *</Label>
                  <Input
                    id="tenthBoard"
                    value={formData.tenthBoard}
                    onChange={(e) => handleInputChange('tenthBoard', e.target.value)}
                    placeholder="e.g., CBSE, ICSE, State Board"
                  />
                </div>
                <div>
                  <Label htmlFor="tenthSchool">School Name *</Label>
                  <Input
                    id="tenthSchool"
                    value={formData.tenthSchool}
                    onChange={(e) => handleInputChange('tenthSchool', e.target.value)}
                    placeholder="Enter school name"
                  />
                </div>
                <div>
                  <Label htmlFor="tenthPercentage">Percentage/CGPA *</Label>
                  <Input
                    id="tenthPercentage"
                    value={formData.tenthPercentage}
                    onChange={(e) => handleInputChange('tenthPercentage', e.target.value)}
                    placeholder="Enter percentage or CGPA"
                  />
                </div>
                <div>
                  <Label htmlFor="tenthYearOfPassing">Year of Passing *</Label>
                  <Input
                    id="tenthYearOfPassing"
                    value={formData.tenthYearOfPassing}
                    onChange={(e) => handleInputChange('tenthYearOfPassing', e.target.value)}
                    placeholder="Enter year of passing"
                  />
                </div>
              </div>
            </div>
            
            {/* 12th Standard */}
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-4">12th Standard / Higher Secondary</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="twelfthBoard">Board *</Label>
                  <Input
                    id="twelfthBoard"
                    value={formData.twelfthBoard}
                    onChange={(e) => handleInputChange('twelfthBoard', e.target.value)}
                    placeholder="e.g., CBSE, ICSE, State Board"
                  />
                </div>
                <div>
                  <Label htmlFor="twelfthSchool">School Name *</Label>
                  <Input
                    id="twelfthSchool"
                    value={formData.twelfthSchool}
                    onChange={(e) => handleInputChange('twelfthSchool', e.target.value)}
                    placeholder="Enter school name"
                  />
                </div>
                <div>
                  <Label htmlFor="twelfthPercentage">Percentage/CGPA *</Label>
                  <Input
                    id="twelfthPercentage"
                    value={formData.twelfthPercentage}
                    onChange={(e) => handleInputChange('twelfthPercentage', e.target.value)}
                    placeholder="Enter percentage or CGPA"
                  />
                </div>
                <div>
                  <Label htmlFor="twelfthYearOfPassing">Year of Passing *</Label>
                  <Input
                    id="twelfthYearOfPassing"
                    value={formData.twelfthYearOfPassing}
                    onChange={(e) => handleInputChange('twelfthYearOfPassing', e.target.value)}
                    placeholder="Enter year of passing"
                  />
                </div>
              </div>
            </div>
            
            {/* Graduation */}
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-4">Graduation / Bachelor's Degree</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="graduationUniversity">University *</Label>
                  <Input
                    id="graduationUniversity"
                    value={formData.graduationUniversity}
                    onChange={(e) => handleInputChange('graduationUniversity', e.target.value)}
                    placeholder="Enter university name"
                  />
                </div>
                <div>
                  <Label htmlFor="graduationCollege">College Name *</Label>
                  <Input
                    id="graduationCollege"
                    value={formData.graduationCollege}
                    onChange={(e) => handleInputChange('graduationCollege', e.target.value)}
                    placeholder="Enter college name"
                  />
                </div>
                <div>
                  <Label htmlFor="graduationDegree">Degree *</Label>
                  <Input
                    id="graduationDegree"
                    value={formData.graduationDegree}
                    onChange={(e) => handleInputChange('graduationDegree', e.target.value)}
                    placeholder="e.g., B.Tech, B.E., BCA, B.Sc."
                  />
                </div>
                <div>
                  <Label htmlFor="graduationSpecialization">Specialization *</Label>
                  <Input
                    id="graduationSpecialization"
                    value={formData.graduationSpecialization}
                    onChange={(e) => handleInputChange('graduationSpecialization', e.target.value)}
                    placeholder="e.g., Computer Science, IT, ECE"
                  />
                </div>
                <div>
                  <Label htmlFor="graduationPercentage">Percentage/CGPA *</Label>
                  <Input
                    id="graduationPercentage"
                    value={formData.graduationPercentage}
                    onChange={(e) => handleInputChange('graduationPercentage', e.target.value)}
                    placeholder="Enter percentage or CGPA"
                  />
                </div>
                <div>
                  <Label htmlFor="graduationYearOfPassing">Year of Passing *</Label>
                  <Input
                    id="graduationYearOfPassing"
                    value={formData.graduationYearOfPassing}
                    onChange={(e) => handleInputChange('graduationYearOfPassing', e.target.value)}
                    placeholder="Enter year of passing"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              Experience & Skills
            </h3>
            
            {/* Internship Experience */}
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-4">Internship Experience (if any)</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="internshipCompany">Company Name</Label>
                  <Input
                    id="internshipCompany"
                    value={formData.internshipCompany}
                    onChange={(e) => handleInputChange('internshipCompany', e.target.value)}
                    placeholder="Enter company name"
                  />
                </div>
                <div>
                  <Label htmlFor="internshipRole">Role/Position</Label>
                  <Input
                    id="internshipRole"
                    value={formData.internshipRole}
                    onChange={(e) => handleInputChange('internshipRole', e.target.value)}
                    placeholder="Enter your role"
                  />
                </div>
                <div>
                  <Label htmlFor="internshipDuration">Duration</Label>
                  <Input
                    id="internshipDuration"
                    value={formData.internshipDuration}
                    onChange={(e) => handleInputChange('internshipDuration', e.target.value)}
                    placeholder="e.g., 3 months, 6 months"
                  />
                </div>
              </div>
            </div>
            
            {/* Projects */}
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-4">Major Project</h4>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="projectTitle">Project Title</Label>
                  <Input
                    id="projectTitle"
                    value={formData.projectTitle}
                    onChange={(e) => handleInputChange('projectTitle', e.target.value)}
                    placeholder="Enter your project title"
                  />
                </div>
                <div>
                  <Label htmlFor="projectDescription">Project Description</Label>
                  <Textarea
                    id="projectDescription"
                    value={formData.projectDescription}
                    onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                    placeholder="Describe your project, technologies used, your role, etc."
                    rows={4}
                  />
                </div>
              </div>
            </div>
            
            {/* Skills */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="technicalSkills">Technical Skills</Label>
                <Textarea
                  id="technicalSkills"
                  value={formData.technicalSkills}
                  onChange={(e) => handleInputChange('technicalSkills', e.target.value)}
                  placeholder="e.g., Web Development, Database Management, etc."
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="programmingLanguages">Programming Languages</Label>
                <Textarea
                  id="programmingLanguages"
                  value={formData.programmingLanguages}
                  onChange={(e) => handleInputChange('programmingLanguages', e.target.value)}
                  placeholder="e.g., Java, Python, JavaScript, C++, etc."
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="certifications">Certifications</Label>
                <Textarea
                  id="certifications"
                  value={formData.certifications}
                  onChange={(e) => handleInputChange('certifications', e.target.value)}
                  placeholder="List any relevant certifications"
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="achievements">Achievements</Label>
                <Textarea
                  id="achievements"
                  value={formData.achievements}
                  onChange={(e) => handleInputChange('achievements', e.target.value)}
                  placeholder="Academic achievements, awards, recognitions, etc."
                  rows={3}
                />
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Document Upload
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Passport Photo */}
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Camera className="h-4 w-4" />
                  <Label>Passport Size Photo *</Label>
                </div>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload('passportPhoto', e.target.files?.[0] || null)}
                />
                <p className="text-xs text-gray-500 mt-1">Upload a recent passport size photograph</p>
              </div>
              
              {/* Resume */}
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-4 w-4" />
                  <Label>Resume/CV *</Label>
                </div>
                <Input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => handleFileUpload('resume', e.target.files?.[0] || null)}
                />
                <p className="text-xs text-gray-500 mt-1">Upload your latest resume (PDF/DOC)</p>
              </div>
              
              {/* 10th Marksheet */}
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-4 w-4" />
                  <Label>10th Marksheet *</Label>
                </div>
                <Input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileUpload('tenthMarksheet', e.target.files?.[0] || null)}
                />
                <p className="text-xs text-gray-500 mt-1">Upload 10th standard marksheet</p>
              </div>
              
              {/* 12th Marksheet */}
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-4 w-4" />
                  <Label>12th Marksheet *</Label>
                </div>
                <Input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileUpload('twelfthMarksheet', e.target.files?.[0] || null)}
                />
                <p className="text-xs text-gray-500 mt-1">Upload 12th standard marksheet</p>
              </div>
              
              {/* Graduation Marksheet */}
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-4 w-4" />
                  <Label>Graduation Marksheet *</Label>
                </div>
                <Input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileUpload('graduationMarksheet', e.target.files?.[0] || null)}
                />
                <p className="text-xs text-gray-500 mt-1">Upload graduation marksheet/degree</p>
              </div>
              
              {/* ID Proof */}
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-4 w-4" />
                  <Label>ID Proof (Aadhaar/PAN) *</Label>
                </div>
                <Input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileUpload('idProof', e.target.files?.[0] || null)}
                />
                <p className="text-xs text-gray-500 mt-1">Upload Aadhaar card or PAN card</p>
              </div>
              
              {/* Signature */}
              <div className="p-4 border rounded-lg md:col-span-2">
                <div className="flex items-center gap-2 mb-2">
                  <PenTool className="h-4 w-4" />
                  <Label>Digital Signature *</Label>
                </div>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload('signature', e.target.files?.[0] || null)}
                />
                <p className="text-xs text-gray-500 mt-1">Upload your signature on white paper</p>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <FileCheck className="h-5 w-5" />
              Additional Information
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="currentCTC">Current CTC (if applicable)</Label>
                <Input
                  id="currentCTC"
                  value={formData.currentCTC}
                  onChange={(e) => handleInputChange('currentCTC', e.target.value)}
                  placeholder="Enter current CTC (e.g., 3.5 LPA)"
                />
              </div>
              <div>
                <Label htmlFor="expectedCTC">Expected CTC *</Label>
                <Input
                  id="expectedCTC"
                  value={formData.expectedCTC}
                  onChange={(e) => handleInputChange('expectedCTC', e.target.value)}
                  placeholder="Enter expected CTC (e.g., 4-6 LPA)"
                />
              </div>
              <div>
                <Label htmlFor="noticePeriod">Notice Period</Label>
                <Select value={formData.noticePeriod} onValueChange={(value) => handleInputChange('noticePeriod', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select notice period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediate</SelectItem>
                    <SelectItem value="15days">15 Days</SelectItem>
                    <SelectItem value="1month">1 Month</SelectItem>
                    <SelectItem value="2months">2 Months</SelectItem>
                    <SelectItem value="3months">3 Months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="willingToRelocate">Willing to Relocate *</Label>
                <Select value={formData.willingToRelocate} onValueChange={(value) => handleInputChange('willingToRelocate', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                    <SelectItem value="depends">Depends on location</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="preferredLocation">Preferred Work Location</Label>
                <Input
                  id="preferredLocation"
                  value={formData.preferredLocation}
                  onChange={(e) => handleInputChange('preferredLocation', e.target.value)}
                  placeholder="Enter preferred cities"
                />
              </div>
              <div>
                <Label htmlFor="referralName">Referral Name (if any)</Label>
                <Input
                  id="referralName"
                  value={formData.referralName}
                  onChange={(e) => handleInputChange('referralName', e.target.value)}
                  placeholder="Enter referral name"
                />
              </div>
              <div>
                <Label htmlFor="referralContact">Referral Contact</Label>
                <Input
                  id="referralContact"
                  value={formData.referralContact}
                  onChange={(e) => handleInputChange('referralContact', e.target.value)}
                  placeholder="Enter referral contact"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="additionalInfo">Additional Information</Label>
              <Textarea
                id="additionalInfo"
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                placeholder="Any additional information you'd like to share..."
                rows={4}
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="agreeToTerms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked)}
              />
              <Label htmlFor="agreeToTerms" className="text-sm">
                I agree to the terms and conditions and privacy policy *
              </Label>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PJ</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                PaheliJob
              </h1>
            </Link>
          </div>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link href="/companies">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Companies
            </Button>
          </Link>
        </div>
        {/* Job Details */}
        {job ? (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{job.title}</CardTitle>
              <CardDescription>{job.type} | {job.location} | {job.salary}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-2 text-gray-700">{job.description}</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {job.requirements.map((req: string, i: number) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Responsibilities:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {job.responsibilities.map((resp: string, i: number) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Job Not Found</CardTitle>
              <CardDescription>The job you are trying to apply for does not exist.</CardDescription>
            </CardHeader>
          </Card>
        )}

        {/* Application Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Job Application</h1>
            <p className="text-gray-600">
              Applying for <span className="font-semibold text-blue-600">{jobTitle}</span> at{' '}
              <span className="font-semibold text-green-600">{companyName}</span>
            </p>
          </div>
          
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">
                Step {currentStep} of {steps.length}
              </span>
              <span className="text-sm text-gray-500">{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="w-full" />
          </div>
          
          {/* Step Indicators */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium ${
                    step.id === currentStep
                      ? 'bg-blue-600 text-white'
                      : step.id < currentStep
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  <Icon className="h-3 w-3" />
                  <span className="hidden sm:inline">{step.title}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Ad Space */}
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center mb-8">
          <p className="text-gray-500 text-sm">Advertisement Space - Google AdSense</p>
          <div className="text-xs text-gray-400 mt-1">728x90 Leaderboard Ad</div>
        </div>

        {/* Form */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {React.createElement(steps[currentStep - 1].icon, { className: "h-5 w-5" })}
              {steps[currentStep - 1].title}
            </CardTitle>
            <CardDescription>
              Please fill in all required fields marked with *
            </CardDescription>
          </CardHeader>
          <CardContent>
            {renderStep()}
            
            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous
              </Button>
              
              {currentStep === steps.length ? (
                <Button
                  onClick={handleSubmit}
                  disabled={!formData.agreeToTerms}
                  className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 flex items-center gap-2"
                >
                  <CheckCircle className="h-4 w-4" />
                  Submit Application
                </Button>
              ) : (
                <Button
                  onClick={nextStep}
                  className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                >
                  Next Step
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Side Ad Space */}
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center mt-8">
          <p className="text-gray-500 text-sm">Advertisement Space - Google AdSense</p>
          <div className="text-xs text-gray-400 mt-1">300x250 Medium Rectangle Ad</div>
        </div>
      </div>
    </div>
  );
}