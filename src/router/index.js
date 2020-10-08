import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
// import AgenteSaude from '../views/site/AgenteSaudePage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/informative',
    name: 'Informative',
    component: () => import('../views/site/InformativePage.vue'),
  },
  {
    path: '/medical-records/edit',
    name: 'Medical-records',
    component: () => import('../views/site/medicalRecordsPages/MedicalRecordsFormPersonalData.vue'),
  },
  {
    path: '/medical-records/edit/address',
    name: 'Medical-records-address',
    component: () => import('../views/site/medicalRecordsPages/MedicalRecordsFormAddress.vue'),
  },
  {
    path: '/medical-records/edit/contact',
    name: 'Medical-records-contact',
    component: () => import('../views/site/medicalRecordsPages/MedicalRecordsFormContact.vue'),
  },
  {
    path: '/medical-records/edit/blood',
    name: 'Medical-records-blood',
    component: () => import('../views/site/medicalRecordsPages/MedicalRecordsFormBlood.vue'),
  },
  {
    path: '/medical-records/edit/allergy',
    name: 'Medical-records-allergy',
    component: () => import('../views/site/medicalRecordsPages/MedicalRecordsFormAllergy.vue'),
  },
  {
    path: '/medical-records/edit/medicineContinuours',
    name: 'Medical-records-medicinecontinuors',
    component: () => import('../views/site/medicalRecordsPages/MedicalRecordsFormMedicineForContin.vue'),
  },
  {
    path: '/health-agent',
    name: 'Health-agent',
    component: () => import('../views/site/HealthAgentPage.vue'),
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('../views/site/PrivacyPage.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/site/RegisterPage.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/site/LoginPage.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
