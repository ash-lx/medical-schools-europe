export interface University {
  name: string;
  country: string;
}

export interface CountryData {
  country: string;
  countryCode: string;
  gdpPerCapita: string;
  entranceExams: string;
  languageRequirementAdmission: string;
  languageRequirementClinical: string;
  practiceLocations: string;
  universities: University[];
  tuitionFees: string;
}