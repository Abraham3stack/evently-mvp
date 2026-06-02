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
    <div style={{ textAlign: 'center', maxWidth: '420px' }}>
      <h2 style={{ fontSize: '40px', fontWeight: 800, color: '#ffffff', marginBottom: '20px', lineHeight: '1.15' }}>
        Let's Launch Your Next Big Event.
      </h2>
      <p style={{ color: '#ffffff', fontSize: '15px', lineHeight: '1.6' }}>
        Join thousands of creators using <span style={{ fontWeight: 700 }}>EVENTLY</span> to build high-converting event pages, manage ticket tiers, and track revenue instantly.
      </p>
    </div>
  );

  return (
    <>
      <AuthLayout gradientContent={gradientContent} formMaxWidth={540}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ width: '100%' }}
        >
          {/* Logo */}
          <motion.div variants={itemVariants} style={{ marginBottom: '40px' }}>
            <AuthLogo />
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} style={{ marginBottom: '32px' }}>
            <h1 style={{ fontSize: '36px', fontWeight: 800, color: '#111827', marginBottom: '12px', lineHeight: '1.1' }}>
              Create your free organizer account
            </h1>
            <p style={{ color: '#9CA3AF', fontSize: '14px', lineHeight: '1.5' }}>
              No credit card required. Set up your profile and start creating immediately.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form onSubmit={handleSubmit(onSubmit)} variants={itemVariants} style={{ marginBottom: '32px' }}>
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
            <motion.div variants={itemVariants} style={{ marginBottom: '28px', color: '#9CA3AF', fontSize: '13px', lineHeight: '1.6' }}>
              <p>
                By clicking{' '}
                <span style={{ fontWeight: 600, color: '#111827' }}>
                  "Create Account"
                </span>, I agree to
                Evently's{' '}
                <Link to="#" style={{ color: '#dc2626', fontWeight: 600, textDecoration: 'none' }}>
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="#" style={{ color: '#dc2626', fontWeight: 600, textDecoration: 'none' }}>
                  Privacy Policy
                </Link>
              </p>
            </motion.div>

            {/* Register Button */}
            <motion.div variants={itemVariants} style={{ marginBottom: '24px' }}>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  background: 'linear-gradient(to right, #ec4899, #9333ea)',
                  opacity: isSubmitting ? 0.7 : 1,
                  width: '100%',
                  height: '58px',
                  borderRadius: '10px',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#ffffff',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
                onMouseEnter={(e) => { if (!isSubmitting) e.currentTarget.style.background = 'linear-gradient(to right, #db2777, #7e22ce)'; }}
                onMouseLeave={(e) => { if (!isSubmitting) e.currentTarget.style.background = 'linear-gradient(to right, #ec4899, #9333ea)'; }}
              >
                {isSubmitting ? 'Creating account...' : 'Create Organizer Account →'}
              </button>
            </motion.div>
          </motion.form>

          {/* Login Link */}
          <motion.div variants={itemVariants} style={{ textAlign: 'center', color: '#6B7280', fontSize: '14px' }}>
            <p>
              Already have an account?{' '}
              <Link
                to="/login"
                style={{ color: '#ec4899', fontWeight: 600, textDecoration: 'none' }}
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
        <div style={{ textAlign: 'center', padding: '16px 0' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>✨</div>
          <p style={{ color: '#374151', marginBottom: '24px' }}>
            Your organizer account has been created successfully. Redirecting to login...
          </p>
          <Button
            variant="primary"
            onClick={handleSuccessClose}
            className="w-full"
          >
            Proceed to Login
          </Button>
        </div>
      </Modal>
    </>
  );
}
