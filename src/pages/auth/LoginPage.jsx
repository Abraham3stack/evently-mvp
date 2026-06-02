/**
 * LoginPage
 * User login form with email and password
 * Matches Figma login design
 */

import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import AuthLayout from '@/components/auth/AuthLayout';
import AuthLogo from '@/components/auth/AuthLogo';
import AuthInput from '@/components/auth/AuthInput';
import { loginSchema } from '@/schemas/authSchemas';

export default function LoginPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data) => {
    // Simulate login delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    navigate('/events');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const gradientContent = <div />;

  return (
    <AuthLayout gradientContent={gradientContent} formMaxWidth={520}>
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
          <h1 style={{ fontSize: '42px', fontWeight: 800, color: '#111827', marginBottom: '12px', lineHeight: '1.1' }}>
            Welcome back!
          </h1>
          <p style={{ color: '#9CA3AF', fontSize: '14px', lineHeight: '1.5' }}>
            Continue with the email address used to create your account
          </p>
        </motion.div>

        {/* Form */}
        <motion.form onSubmit={handleSubmit(onSubmit)} variants={itemVariants} style={{ marginBottom: '32px' }}>
          {/* Email */}
          <AuthInput
            label="Email address"
            type="email"
            placeholder="john@example.com"
            error={errors.email?.message}
            disabled={isSubmitting}
            {...register('email')}
          />

          {/* Password */}
          <AuthInput
            label="Password"
            type="password"
            placeholder="Enter your password"
            error={errors.password?.message}
            disabled={isSubmitting}
            {...register('password')}
          />

          {/* Forgot Password */}
          <motion.div variants={itemVariants} style={{ marginBottom: '20px', textAlign: 'right' }}>
            <Link
              to="#"
              style={{ color: '#ec4899', fontWeight: 600, fontSize: '14px', textDecoration: 'none' }}
            >
              Forgot password?
            </Link>
          </motion.div>

          {/* Login Button */}
          <motion.div variants={itemVariants} style={{ marginBottom: '20px' }}>
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
              {isSubmitting ? 'Logging in...' : 'Log in'}
            </button>
          </motion.div>
        </motion.form>

        {/* Divider */}
        <motion.div variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <div style={{ flex: 1, height: '1px', background: '#E5E7EB' }} />
          <span style={{ color: '#9CA3AF', fontSize: '13px', fontWeight: 600 }}>OR</span>
          <div style={{ flex: 1, height: '1px', background: '#E5E7EB' }} />
        </motion.div>

        {/* Google Login */}
        <motion.div variants={itemVariants} style={{ marginBottom: '24px' }}>
          <button
            type="button"
            style={{
              width: '100%',
              height: '58px',
              border: '1px solid #9CA8BC',
              borderRadius: '10px',
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              fontWeight: 600,
              color: '#374151',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#F9FAFB'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#ffffff'; }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span>Sign in with Google</span>
          </button>
        </motion.div>

        {/* Sign Up Link */}
        <motion.div variants={itemVariants} style={{ textAlign: 'center', color: '#6B7280', fontSize: '14px' }}>
          <p>
            Don't have an account?{' '}
            <Link
              to="/register"
              style={{ color: '#ec4899', fontWeight: 600, textDecoration: 'none' }}
            >
              Create one
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </AuthLayout>
  );
}
