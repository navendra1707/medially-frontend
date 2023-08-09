import acidity from '../assets/Acidity.png';
import acne from '../assets/Acne.png';
import allergies from '../assets/Allergies.png';
import anxiety from '../assets/Anxiety.png';
import asthma from '../assets/Asthma.png';
import back_pain from '../assets/Back_Pain.png';
import blurry_vision from '../assets/Blurry_Vision.png';
import chest_pain from '../assets/Chest_Pain.png';
import chickenpox from '../assets/Chickenpox.png';
import common_cold from '../assets/Common_Cold.png';
import constipation from '../assets/Constipation.png';
import cough from '../assets/Cough.png';
import cough_in_children from '../assets/Cough_in_Children.png';
import delayed_ejaculation from '../assets/Delayed_Ejaculation.png';
import diabetes from '../assets/Diabetes.png';
import diarrhoea from '../assets/Diarrhoea.png';
import dizziness from '../assets/Dizziness_(2).png';
import dry_eyes from '../assets/Dry_Eyes.png';
import fever from '../assets/Fever.png';
import food_poisoning from '../assets/Food_Poisoining.png';
import fungal_infection from '../assets/Fungal_Infection.png';
import hair_loss from '../assets/Hair_Loss.png';
import headache from '../assets/Headache.png';
import hearing_loss from '../assets/Hearing_Loss.png';
import hiv from '../assets/HIV.png';
import indigestion from '../assets/Indigestion.png';
import irregular_periods from '../assets/Irregular_Period.png';
import itching from '../assets/Iching.png';
import knee_pain from '../assets/Knee_Pain.png';
import migraine from '../assets/Migraine.png';
import mouth_sores from '../assets/Mouth_Sores.png';
import obesity from '../assets/Obesity.png';
import pcos from '../assets/PCOS.png';
import piles from '../assets/Piles.png';
import pregnency from '../assets/Pregnency.png';
import shoulder_pain from '../assets/Shoulder_Pain.png';
import snoring from '../assets/Snoring.png';
import stomach_pain from '../assets/Stomach_Pain.png';
import swelling from '../assets/Swelling.png';
import thyroid from '../assets/Thyroid.png';
import toothache from '../assets/Toothache.png';
import vaginal_discharge from '../assets/Vaginal_Discharge.png';

const data = {
    symptoms: [
        {
            name: 'Acidity',
            image: acidity,
            specialization: [
                'Dietician',
                'Gastroenterologist',
                'General Physician'
            ]
        },
        {
            name: 'Acne',
            image: acne,
            specialization: [
                'Dermetologist'
            ]
        },
        {
            name: 'Allergies',
            image: allergies,
            specialization: [
                'Dermatologist',
                'General Physician',
                'Pediatrics'
            ]
        },
        {
            name: 'Anxiety',
            image: anxiety,
            specialization: ['Endocrinologist']
        },
        {
            name: 'Asthma',
            image: asthma,
            specialization: ['General Physician']
        },
        {
            name: 'Back Pain',
            image: back_pain,
            specialization: [
                'General Physician', 
                'Orthopedic'
            ]
        },
        {
            name: 'Blurry Vision',
            image: blurry_vision,
            specialization: ['Ophthalmologist']
        },
        {
            name: 'Chest Pain',
            image: chest_pain,
            specialization: ['Cardiologist']
        },
        {
            name: 'Chickenpox',
            image: chickenpox,
            specialization: ['General Physician']
        },
        {
            name: 'Common Cold',
            image: common_cold,
            specialization: ['Pediatrics', 'General Physician']
        },
        {
            name: 'Constipation',
            image: constipation,
            specialization: [
                'Gynaecologist',
                'General Physician',
                'Pediatrics'
            ]
        },
        {
            name: 'Cough',
            image: cough,
            specialization: [
                'General Physician',
            ]
        },
        {
            name: 'Cough in Children',
            image: cough_in_children,
            specialization: [
                'Pediatrics'
            ]
        },
        {
            name: 'Delayed Ejaculation',
            image: delayed_ejaculation,
            specialization: [
                'Sexologist',
                'Urologist'
            ]
        },
        {
            name: 'Diabetes',
            image: diabetes,
            specialization: [
                'Diabetologist',
                'Endocrinologist',
                'General Physician'
            ]
        },
        {
            name: 'Diarrhoea',
            image: diarrhoea,
            specialization: ['General Physician']
        },
        {
            name: 'Dizziness',
            image: dizziness,
            specialization: ['General Physician']
        },
        {
            name: 'Dry Eyes',
            image: dry_eyes,
            specialization: ['Ophthalmologist']
        },
        {
            name: 'Fever',
            image: fever,
            specialization: ['General Physician']
        },
        {
            name: 'Food Poisoning',
            image: food_poisoning,
            specialization: ['General Physician']
        },
        {
            name: 'Fungal Infection',
            image: fungal_infection,
            specialization: [
                'Dermatologist',
                'General Physician'
            ]
        },
        {
            name: 'Hair Loss',
            image: hair_loss,
            specialization: ['Dermatologist']
        },
        {
            name: 'Headache',
            image: headache,
            specialization: ['General Physician']
        },
        {
            name: 'Hearing Loss',
            image: hearing_loss,
            specialization: [
                'ENT Specialist',
                'General Surgeons'
            ] 
        },
        {
            name: 'HIV',
            image: hiv,
            specialization: ['General Physician']
        },
        {
            name: 'Indigestion',
            image: indigestion,
            specialization: ['General Physician']
        },
        {
            name: 'Irregular Periods',
            image: irregular_periods,
            specialization: ['Gynaecologist']
        },
        {
            name: 'Itching',
            image: itching,
            specialization: [
                'Dermatologist',
                'General Physician'
            ]
        },
        {
            name: 'Knee Pain',
            image: knee_pain,
            specialization: [
                'General Surgeons',
                'Orthopedic'
            ]
        },
        {
            name: 'Migraine',
            image: migraine,
            specialization: ['General Physician']
        },
        {
            name: 'Mouth Sores',
            image: mouth_sores,
            specialization: [
                'ENT Specialist',
                'General Physician'
            ]
        },
        {
            name: 'Obesity',
            image: obesity,
            specialization: [
                'Dietician',
                'General Physician'
            ]
        },
        {
            name: 'Panic Attack',
            image: null,
            specialization: ['General Physician']
        },
        {
            name: 'PCOS',
            image: pcos,
            specialization: ['Gynaecologist']
        },
        {
            name: 'Piles',
            image: piles,
            specialization: [
                'General Surgeon',
                'Urologist'
            ]
        },
        {
            name: 'Pregnency',
            image: pregnency,
            specialization: ['Gynaecologist']
        },
        {
            name: 'Shoulder Pain',
            image: shoulder_pain,
            specialization: ['Orthopedic']
        },
        {
            name: 'Snoring',
            image: snoring,
            specialization: ['General Physician']
        },
        {
            name: 'Stomach Pain',
            image: stomach_pain,
            specialization: [
                'Gastroenterologist',
                'General Physician'
            ]
        },
        {
            name: 'Swelling',
            image: swelling,
            specialization: ['General Physician']
        },
        {
            name: 'Thyroid',
            image: thyroid,
            specialization: [
                'Endocrinologist',
                'General Physician'
            ]
        },
        {
            name: 'Toothache',
            image: toothache,
            specialization: ['Dentist']
        },
        {
            name: 'Vaginal Discharge',
            image: vaginal_discharge,
            specialization: ['Constipation']
        }
    ]
}

export default data;