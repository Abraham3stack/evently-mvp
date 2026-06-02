/**
 * RegisterPage (Organizer)
 * Organizer registration form
 * Matches Figma registration design
 */

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import AuthLayout from '@/components/auth/AuthLayout';
import AuthLogo from '@/components/auth/AuthLogo';
import AuthInput from '@/components/auth/AuthInput';
import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import { registerSchema } from '@/schemas/authSchemas';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit = async (data) => {
    // Simulate registration delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    setShowSuccess(true);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    navigate('/login');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const gradientContent = (
    <div className="text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Let's Launch Your Next Big Event.
      </h2>
      <p className="text-white text-lg leading-relaxed max-w-sm">
        Join thousands of creators using <span className="font-bold">EVENTLY</span> to build high-converting event pages, manage ticket tiers, and track revenue instantly.
      </p>
    </div>
  );

  return (
    <>
      <AuthLayout gradientContent={gradientContent}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          {/* Logo */}
          <motion.div variants={itemVariants}>
            <AuthLogo />
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="mb-6 md:mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Create your free organizer account
            </h1>
            <p className="text-gray-500 text-sm md:text-base">
              No credit card required. Set up your profile and start creating immediately.....
            </p>
          </motion.div>

          {/* Form */}
          <motion.form onSubmit={handleSubmit(onSubmit)} variants={itemVariants} className="mb-6">
            {/* Organization */}
            <AuthInput
              label="Organization"
              type="text"
              placeholder="Vibecast Production"
              error={errors.organization?.message}
              disabled={isSubmitting}
              {...register('organization')}
            />

            {/* Email */}
            <AuthInput
              label="Work Email Address"
              type="email"
              placeholder="John Doe@gmail.com"
              error={errors.email?.message}
              disabled={isSubmitting}
              {...register('email')}
            />

            {/* Password */}
            <AuthInput
              label="Password"
              type="password"
              placeholder="At least 8 secure characters..."
              error={errors.password?.message}
              disabled={isSubmitting}
              {...register('password')}
            />

            {/* Confirm Password */}
            <AuthInput
              label="Confirm Password"
              type="password"
              placeholder="At least 8 secure characters..."
              error={errors.confirmPassword?.message}
              disabled={isSubmitting}
              {...register('confirmPassword')}
            />

            {/* Terms */}
            <motion.div variants={itemVariants} className="mb-6 text-xs md:text-sm text-gray-600 text-center">
              <p>
                By clicking{' '}
                <span className="font-semibold text-gray-900">Create Account</span>, I agree to
                Evently's{' '}
                <Link to="#" className="text-red-600 hover:text-red-700 font-semibold">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="#" className="text-red-600 hover:text-red-700 font-semibold">
                  Privacy Policy
                </Link>
              </p>
            </motion.div>

            {/* Register Button */}
            <motion.div variants={itemVariants}>
              <Button
                variant="primary"
                size="lg"
                loading={isSubmitting}
                disabled={isSubmitting}
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3"
              >
                {isSubmitting ? 'Creating account...' : 'Create Organizer Account →'}
              </Button>
            </motion.div>
          </motion.form>

          {/* Login Link */}
          <motion.div variants={itemVariants} className="text-center text-gray-600">
            <p className="text-sm">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-pink-500 hover:text-pink-600 font-semibold transition-colors"
              >
                Log in
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </AuthLayout>

      {/* Success Modal */}
      <Modal
        isOpen={showSuccess}
        title="Account Created!"
        onClose={handleSuccessClose}
        size="sm"
      >
        <div className="text-center py-4">
          <div className="text-6xl mb-4">✨</div>
          <p className="text-gray-700 mb-6">
            Your organizer account has been created successfully. Redirecting to login...
          </p>
          <Button
            variant="primary"
            onClick={handleSuccessClose}
            className="w-full"
          >
            Continue to Login
          </Button>
        </div>
      </Modal>
    </>
  );
}
