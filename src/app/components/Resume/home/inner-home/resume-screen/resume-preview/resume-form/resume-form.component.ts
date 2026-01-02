import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { MatChipEditedEvent, MatChipInputEvent, MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatCardModule, MatButtonModule, MatIconModule, CommonModule,
    MatChipsModule, FormsModule
  ]
})
export class ResumeFormComponent implements OnInit {
  resumeForm!: FormGroup;
  router = inject(Router);
  fb = inject(FormBuilder);
  @Input() resumeData: any;

  newSkillCtrl = this.fb.control('');
  newLanguageCtrl = this.fb.control('');
  newInterestCtrl = this.fb.control('');

  profilePreview: string | null = null;
  selectedFile: File | null = null;

  resumeLocalStg: any = localStorage.getItem('Resume Data');
  resumeDataPars: any = JSON.parse(this.resumeLocalStg);
  resumeDataVar: any = this.resumeDataPars;

  // Default Resume Data
  // resumeDataVar: any = {
  //   title: "test title",
  //   section: {
  //     Contact: {
  //       Name: "John Smith",
  //       Email: "john@email.com",
  //       Mobile: "+91 99999",
  //       Address: "123, Main Street, Indore, India",
  //       LinkedIn: "https://linkedin.com/in/johnsmith",
  //       Github: "https://github.com/johnsmith",
  //       Website: "https://johnsmith.dev",
  //       DOB: "1990-01-01",
  //       ProfilePicture: "https://picsum.photos/id/1/800/1200"
  //     },
  //     Summary: "Experienced frontend developer specializing in Angular and React...",
  //     Objective: "To contribute to innovative web projects...",
  //     Skills: ["Angular", "React"],
  //     Experience: [
  //       {
  //         Employer: "Google",
  //         RoleAndJobTitle: "Frontend Developer",
  //         StartDate: "2020",
  //         EndDate: "2022",
  //         Location: "India",
  //         Description: "Developed responsive web applications using Angular..."
  //       }
  //     ],
  //     Education: [
  //       {
  //         FieldOfStudy: "B.Tech in Computer Science",
  //         university: "ABC University",
  //         Location: "India",
  //         GraduationYear: "2016-2020",
  //         GPA: "8.5/10",
  //         Projects: ["E-commerce website", "Portfolio app"]
  //       }
  //     ],
  //     Languages: ["English", "Hindi"],
  //     Certificates: ["Angular Advanced - Udemy (2021)"],
  //     Interests: ["Traveling", "Photography"],
  //     References: [
  //       { Name: "Jane Doe", Role: "Manager at Google", Contact: "jane@email.com" }
  //     ]
  //   }
  // };

  ngOnInit() {
    // console.log("tt", this.resumeDataVar)
    if (this.resumeDataVar == null) {
      this.resumeDataVar = this.resumeData;
    }
    this.buildForm();
    this.setFormData();
  }

  buildForm() {
    this.resumeForm = this.fb.group({
      title: [''],
      Contact: this.fb.group({
        Name: [''],
        Email: [''],
        Mobile: [''],
        Address: [''],
        LinkedIn: [''],
        Github: [''],
        Website: [''],
        DOB: [''],
        ProfilePicture: ['']
      }),
      Summary: [''],
      Objective: [''],
      Skills: this.fb.array([]),
      Experience: this.fb.array([]),
      Education: this.fb.array([]),
      Languages: this.fb.array([]),
      Certificates: this.fb.array([]),
      Interests: this.fb.array([]),
      References: this.fb.array([])
    });
  }

  /*--------------------------------
       GETTERS
   --------------------------------*/
  get contactGroup() { return this.resumeForm.get('Contact') as FormGroup; }
  get skillsArray() { return this.resumeForm.get('Skills') as FormArray; }
  get experienceArray() { return this.resumeForm.get('Experience') as FormArray; }
  get educationArray() { return this.resumeForm.get('Education') as FormArray; }
  get certificatesArray() { return this.resumeForm.get('Certificates') as FormArray; }
  get languagesArray() { return this.resumeForm.get('Languages') as FormArray; }
  get interestsArray() { return this.resumeForm.get('Interests') as FormArray; }
  get referencesArray() { return this.resumeForm.get('References') as FormArray; }


  /*--------------------------------
      FORM ITEM STRUCTURES
  --------------------------------*/
  skillItem(s: any) {
    return this.fb.group({
      name: [s?.name ?? '']
    });
  }

  experienceItem(e: any) {
    return this.fb.group({
      company: [e?.company ?? ''],
      role: [e?.role ?? ''],
      year: [e?.year ?? ''],
      responsibilities: this.fb.array((e?.responsibilities ?? []).map((r: any) => this.fb.control(r))),
      achievements: this.fb.array((e?.achievements ?? []).map((a: any) => this.fb.control(a)))
    });
  }

  educationItem(ed: any) {
    return this.fb.group({
      university: [ed?.university ?? ''],
      FieldOfStudy: [ed?.FieldOfStudy ?? ''],
      GraduationYear: [ed?.GraduationYear ?? ''],
      Location: [ed?.Location ?? ''],
      academicAchievements: [ed?.academicAchievements ?? ''],
      Marks: [ed?.Marks ?? ''],
      Projects: this.fb.array(
        (ed?.Projects ?? []).map((p: any) => this.fb.control(p))
      )
    });
  }


  certificationItem(c: any) {
    return this.fb.group({
      name: [c?.name ?? ''],
      year: [c?.year ?? ''],
      issuer: [c?.issuer ?? '']
    });
  }

  languageItem(l: any) {
    return this.fb.group({
      name: [l?.name ?? '']
    });
  }

  referenceItem(r: any) {
    return this.fb.group({
      name: [r?.name ?? ''],
      role: [r?.role ?? ''],
      contact: [r?.contact ?? '']
    });
  }

  /*--------------------------------
      SET DATA (NULL SAFE)
  --------------------------------*/
  setFormData() {
    if (!this.resumeDataVar) return;

    const section = this.resumeDataVar.section ?? {};

    // -------------------- TITLE --------------------
    this.resumeForm.patchValue({
      title: this.resumeDataVar.title ?? '',
    });

    // -------------------- CONTACT --------------------
    const contact = section.Contact ?? {};
    this.contactGroup.patchValue(contact);

    if (contact.ProfilePicture) {
      this.profilePreview = contact.ProfilePicture;
      this.contactGroup.get('ProfilePicture')?.setValue(contact.ProfilePicture);
    }

    // -------------------- SIMPLE FIELDS --------------------
    this.resumeForm.patchValue({
      Summary: section.Summary ?? '',
      Objective: section.Objective ?? ''
    });

    // -------------------- CLEAR ARRAYS --------------------
    this.skillsArray.clear();
    this.experienceArray.clear();
    this.educationArray.clear();
    this.certificatesArray.clear();
    this.languagesArray.clear();
    this.interestsArray.clear();
    this.referencesArray.clear();

    // -------------------- SKILLS --------------------
    (section.Skills ?? []).forEach((s: string) => {
      this.skillsArray.push(this.skillItem({ name: s }));
    });

    // -------------------- EXPERIENCE --------------------
    (section.Experience ?? []).forEach((e: any) => {
      this.experienceArray.push(
        this.experienceItem({
          company: e.Employer ?? '',
          role: e.RoleAndJobTitle ?? '',
          year: `${e.StartDate ?? ''} - ${e.EndDate ?? ''}`,
          responsibilities: e.Description ? [e.Description] : [],
          achievements: []
        })
      );
    });

    // -------------------- EDUCATION --------------------
    (section.Education ?? []).forEach((ed: any) => {
      this.educationArray.push(this.educationItem(ed));
    });


    // -------------------- CERTIFICATES --------------------
    (section.Certificates ?? []).forEach((c: string) => {
      this.certificatesArray.push(
        this.certificationItem({ name: c })
      );
    });

    // -------------------- LANGUAGES --------------------
    (section.Languages ?? []).forEach((l: string) => {
      this.languagesArray.push(
        this.languageItem({ name: l })
      );
    });

    // -------------------- INTERESTS --------------------
    (section.Interests ?? []).forEach((i: string) => {
      this.interestsArray.push(this.fb.control(i));
    });

    // -------------------- REFERENCES --------------------
    (section.References ?? []).forEach((r: any) => {
      this.referencesArray.push(
        this.referenceItem({
          name: r.Name ?? '',
          role: r.Role ?? '',
          contact: r.Contact ?? ''
        })
      );
    });
  }

  /*--------------------------------
      ADD / REMOVE Functions
  --------------------------------*/
  addSkill() {
    this.skillsArray.push(this.skillItem({}));
  }
  removeSkill(i: number) { this.skillsArray.removeAt(i); }

  addExperience() {
    this.experienceArray.push(this.experienceItem({ responsibilities: [], achievements: [] }));
  }
  removeExperience(i: number) { this.experienceArray.removeAt(i); }

  /*--------------------------------
      RESPONSIBILITIES FUNCTIONS
  --------------------------------*/
  addResponsibility(expIndex: number) {
    const exp = this.experienceArray.at(expIndex);
    const responsibilities = exp.get('responsibilities') as FormArray;
    responsibilities.push(this.fb.control('')); // add empty responsibility
  }

  removeResponsibility(expIndex: number, resIndex: number) {
    const exp = this.experienceArray.at(expIndex);
    const responsibilities = exp.get('responsibilities') as FormArray;
    responsibilities.removeAt(resIndex);
  }

  /*--------------------------------
      ACHIEVEMENTS FUNCTIONS
  --------------------------------*/
  addAchievement(expIndex: number) {
    const exp = this.experienceArray.at(expIndex);
    const achievements = exp.get('achievements') as FormArray;
    achievements.push(this.fb.control('')); // add empty achievement
  }

  removeAchievement(expIndex: number, achIndex: number) {
    const exp = this.experienceArray.at(expIndex);
    const achievements = exp.get('achievements') as FormArray;
    achievements.removeAt(achIndex);
  }

  /*--------------------------------
      HELPER GETTERS
  --------------------------------*/
  getResponsibilities(expIndex: number): FormArray {
    return this.experienceArray.at(expIndex).get('responsibilities') as FormArray;
  }

  getAchievements(expIndex: number): FormArray {
    return this.experienceArray.at(expIndex).get('achievements') as FormArray;
  }
  addEducation() {
    this.educationArray.push(
      this.educationItem({ Projects: [] })
    );
  }


  removeEducation(i: number) {
    this.educationArray.removeAt(i);
  }

  // Projects inside education
  addProject(eduIndex: number) {
    const edu = this.educationArray.at(eduIndex);
    const projects = edu.get('projects') as FormArray;
    projects.push(this.fb.control(''));
  }

  removeProject(eduIndex: number, projIndex: number) {
    const edu = this.educationArray.at(eduIndex);
    const projects = edu.get('projects') as FormArray;
    projects.removeAt(projIndex);
  }

  getProjects(eduIndex: number): FormArray {
    return this.educationArray
      .at(eduIndex)
      .get('Projects') as FormArray;
  }


  addCertification() {
    this.certificatesArray.push(this.certificationItem({}));
  }

  removeCertification(i: number) {
    this.certificatesArray.removeAt(i);
  }
  addLanguage() {
    this.languagesArray.push(this.languageItem({}));
  }

  removeLanguage(i: number) {
    this.languagesArray.removeAt(i);
  }
  addInterest() {
    this.interestsArray.push(this.fb.control(''));
  }

  removeInterest(i: number) {
    this.interestsArray.removeAt(i);
  }

  addReference() {
    this.referencesArray.push(this.referenceItem({}));
  }

  removeReference(i: number) {
    this.referencesArray.removeAt(i);
  }

  onImageSelect(event: any) {
    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      const base64Image = reader.result as string;

      this.profilePreview = base64Image;

      // ✅ Update form control value here
      this.resumeForm.get('Contact.ProfilePicture')?.setValue(base64Image);

    };

    reader.readAsDataURL(file);
  }


  submitForm() {
    if (this.resumeForm.invalid) {
      this.resumeForm.markAllAsTouched();
      return;
    }

    console.log("FINAL FORM DATA:", this.resumeForm.value);
    if (this.resumeForm.valid) {
      // Get the old value from localStorage
      const oldValueRaw = localStorage.getItem('Resume Data');
      const oldValue = oldValueRaw ? JSON.parse(oldValueRaw) : null;


      // Function to compare objects deeply
      function isEqual(a: any, b: any): boolean {
        return JSON.stringify(a) === JSON.stringify(b);
      }

      if (isEqual(oldValue, this.resumeForm.value)) {
        // If both are deeply equal
        console.log('⚠️ Values are same. No update needed.');
      } else {
        // If there's any difference: missing key, extra key, value change

        const rawData = this.resumeForm.value;

        const formattedResumeData = {
          title: rawData.title,
          section: {
            Contact: rawData.Contact,

            Summary: rawData.Summary,
            Objective: rawData.Objective,

            Skills: rawData.Skills?.map((s: any) => s.name),

            Experience: rawData.Experience?.map((exp: any) => ({
              Employer: exp.company,
              RoleAndJobTitle: exp.role,
              StartDate: exp.year?.split('-')[0]?.trim(),
              EndDate: exp.year?.split('-')[1]?.trim(),
              Location: '',
              Description: exp.responsibilities?.join(' ')
            })),

            Education: rawData.Education,
            Languages: rawData.Languages?.map((l: any) => l.name),

            Certificates: rawData.Certificates?.map((c: any) => c.name),

            Interests: rawData.Interests,

            References: rawData.References?.map((r: any) => ({
              Name: r.name,
              Role: r.role,
              Contact: r.contact
            }))
          }
        };


        localStorage.setItem('Resume Data', JSON.stringify(formattedResumeData));
        this.router.navigateByUrl('/inner-home');
        console.log('✅ Values were different. LocalStorage updated.');
      }
      this.resumeForm.reset();

    } else {
      alert()
    }
    // yahi data API me send kar sakte ho
    // this.apiService.saveResume(this.resumeForm.value).subscribe(...)
  }
  addSkillFromInput(event: any) {
    const value = (event.value || '').trim();

    if (value) {
      this.skillsArray.push(this.skillItem({ name: value }));
    }

    // clear input
    event.chipInput?.clear();
  }
  addSkillFromButton() {
    const value = this.newSkillCtrl.value?.trim();

    if (!value) return;

    this.skillsArray.push(this.skillItem({ name: value }));

    // input clear
    this.newSkillCtrl.reset();
  }

  addLanguageFromButton() {
    const value = this.newLanguageCtrl.value?.trim();

    if (!value) return;

    this.languagesArray.push(this.languageItem({ name: value }));

    // input clear
    this.newLanguageCtrl.reset();
  }
  addInterestFromButton() {
    const value = this.newInterestCtrl.value?.trim();

    if (!value) return;

    this.interestsArray.push(this.fb.control(value));

    // input clear
    this.newInterestCtrl.reset();
  }


}
