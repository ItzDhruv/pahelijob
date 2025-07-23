
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProfileOverview() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    title: 'Senior Software Engineer',
    bio: 'Passionate software engineer with 5+ years of experience in React, Node.js, and cloud technologies. Love building scalable applications and mentoring junior developers.',
    skills: ['React', 'Node.js', 'JavaScript', 'Python', 'AWS', 'Docker', 'MongoDB', 'GraphQL'],
    experience: [
      {
        company: 'TechCorp Inc.',
        position: 'Software Engineer',
        duration: '2021 - Present',
        description: 'Led development of microservices architecture, improved performance by 40%',
      },
      {
        company: 'StartupXYZ',
        position: 'Frontend Developer',
        duration: '2019 - 2021',
        description: 'Built responsive web applications using React and modern JavaScript',
      },
    ],
    education: [
      {
        school: 'Stanford University',
        degree: 'Bachelor of Science in Computer Science',
        year: '2019',
      },
    ],
    resumeUrl: '/resume.pdf',
    profileImage: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20male%20software%20engineer%2C%20modern%20office%20background%2C%20business%20casual%20attire%2C%20friendly%20smile%2C%20natural%20lighting%2C%20professional%20corporate%20photography%20style&width=120&height=120&seq=profile-image-001&orientation=squarish',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(profile);

  const handleSave = () => {
    setProfile(editedProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  const addSkill = () => {
    const newSkill = prompt('Enter a new skill:');
    if (newSkill && !editedProfile.skills.includes(newSkill)) {
      setEditedProfile(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill],
      }));
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setEditedProfile(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove),
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Profile Overview</h2>
        <div className="flex items-center gap-2">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium cursor-pointer whitespace-nowrap"
              >
                Save Changes
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium cursor-pointer whitespace-nowrap"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium cursor-pointer whitespace-nowrap"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <img
              src={profile.profileImage}
              alt={profile.name}
              className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{profile.name}</h3>
            <p className="text-gray-600 mb-4">{profile.title}</p>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center justify-center">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-mail-line"></i>
                </div>
                {profile.email}
              </div>
              <div className="flex items-center justify-center">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-phone-line"></i>
                </div>
                {profile.phone}
              </div>
              <div className="flex items-center justify-center">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-map-pin-line"></i>
                </div>
                {profile.location}
              </div>
            </div>
            <div className="mt-6">
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium cursor-pointer">
                Upload Resume
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">About</h4>
            {isEditing ? (
              <textarea
                value={editedProfile.bio}
                onChange={(e) => setEditedProfile(prev => ({ ...prev, bio: e.target.value }))}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            ) : (
              <p className="text-gray-700 leading-relaxed">{profile.bio}</p>
            )}
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-gray-900">Skills</h4>
              {isEditing && (
                <button
                  onClick={addSkill}
                  className="bg-green-100 text-green-700 px-3 py-1 rounded-lg hover:bg-green-200 transition-colors text-sm font-medium cursor-pointer"
                >
                  Add Skill
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {(isEditing ? editedProfile.skills : profile.skills).map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium flex items-center"
                >
                  {skill}
                  {isEditing && (
                    <button
                      onClick={() => removeSkill(skill)}
                      className="ml-2 w-4 h-4 flex items-center justify-center text-blue-600 hover:text-blue-800 cursor-pointer"
                    >
                      <i className="ri-close-line text-xs"></i>
                    </button>
                  )}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Experience</h4>
            <div className="space-y-4">
              {profile.experience.map((exp, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h5 className="font-medium text-gray-900">{exp.position}</h5>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                      <p className="text-sm text-gray-600">{exp.duration}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Education</h4>
            <div className="space-y-4">
              {profile.education.map((edu, index) => (
                <div key={index} className="border-l-4 border-green-500 pl-4">
                  <h5 className="font-medium text-gray-900">{edu.degree}</h5>
                  <p className="text-green-600 font-medium">{edu.school}</p>
                  <p className="text-sm text-gray-600">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">Profile Completeness</h3>
        <div className="flex items-center mb-3">
          <div className="flex-1 bg-blue-200 rounded-full h-2 mr-3">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
          </div>
          <span className="text-blue-800 font-medium">85%</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center text-green-700">
            <div className="w-4 h-4 flex items-center justify-center mr-2">
              <i className="ri-check-line"></i>
            </div>
            Profile photo added
          </div>
          <div className="flex items-center text-green-700">
            <div className="w-4 h-4 flex items-center justify-center mr-2">
              <i className="ri-check-line"></i>
            </div>
            Skills listed
          </div>
          <div className="flex items-center text-green-700">
            <div className="w-4 h-4 flex items-center justify-center mr-2">
              <i className="ri-check-line"></i>
            </div>
            Experience added
          </div>
          <div className="flex items-center text-orange-700">
            <div className="w-4 h-4 flex items-center justify-center mr-2">
              <i className="ri-close-line"></i>
            </div>
            Portfolio link missing
          </div>
        </div>
      </div>
    </div>
  );
}
