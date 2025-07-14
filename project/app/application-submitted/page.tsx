'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Home, Search, Building2, Mail, Phone, Clock } from 'lucide-react';

export default function ApplicationSubmittedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Success Message */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Application Submitted Successfully!</h1>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for applying through PaheliJob. We have received your application and will reach out to you soon.
          </p>
        </div>

        {/* Application Details */}
        <Card className="shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="text-center">What happens next?</CardTitle>
            <CardDescription className="text-center">
              Here's what you can expect from our application process
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Application Review</h3>
                <p className="text-sm text-gray-600">
                  Our HR team will review your application within 3-5 business days
                </p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Initial Screening</h3>
                <p className="text-sm text-gray-600">
                  If shortlisted, we'll contact you for a preliminary phone/video interview
                </p>
              </div>
              
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Final Interview</h3>
                <p className="text-sm text-gray-600">
                  Technical and HR rounds followed by offer discussion
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Card className="shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Important Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-medium text-gray-900">Keep your phone accessible</h4>
                  <p className="text-sm text-gray-600">
                    We may call you at any time during business hours for updates on your application
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-medium text-gray-900">Check your email regularly</h4>
                  <p className="text-sm text-gray-600">
                    All communication regarding your application will be sent to your registered email
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-medium text-gray-900">Application reference</h4>
                  <p className="text-sm text-gray-600">
                    Your application ID: <span className="font-mono bg-gray-100 px-2 py-1 rounded">PJ{new Date().getTime().toString().slice(-6)}</span>
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ad Space */}
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-8">
          <p className="text-gray-500 text-sm">Advertisement Space - Google AdSense</p>
          <div className="text-xs text-gray-400 mt-2">970x250 Large Rectangle Ad</div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 flex items-center gap-2">
              <Home className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <Link href="/jobs">
            <Button size="lg" variant="outline" className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              Browse More Jobs
            </Button>
          </Link>
          <Link href="/companies">
            <Button size="lg" variant="outline" className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              Explore Companies
            </Button>
          </Link>
        </div>

        {/* Contact Information */}
        <div className="text-center mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
          <p className="text-sm text-gray-600 mb-4">
            If you have any questions about your application, feel free to contact us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <span className="flex items-center gap-1 justify-center">
              <Mail className="h-4 w-4" />
              support@pahelijob.com
            </span>
            <span className="flex items-center gap-1 justify-center">
              <Phone className="h-4 w-4" />
              +91-8000-123-456
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}