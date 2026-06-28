import React, { useState } from 'react';
import Button from './Button';
import SpinnerLoading from './SpinnerLoading';
import Toast from './Toast';
import Avatar from './Avatar';
import AvatarGroup from './AvatarGroup';

/**
 * ComponentShowcase - Demonstração interativa de todos os componentes do Design System
 * Inclui Button e SpinnerLoading com todas as suas variantes, tamanhos e estados
 */
export function ComponentShowcase() {
  const [activeTab, setActiveTab] = useState<'button' | 'spinner' | 'toast' | 'avatar'>('button');
  const [selectedSize, setSelectedSize] = useState<'sm' | 'md' | 'lg' | 'icon'>('md');
  const [selectedVariant, setSelectedVariant] = useState<
    'Default' | 'Secondary' | 'Destructive' | 'Outline' | 'Ghost' | 'Link'
  >('Default');
  const [selectedState, setSelectedState] = useState<
    'Default' | 'Hover' | 'Loading' | 'Disabled'
  >('Default');
  const [spinnerStep, setSpinnerStep] = useState<'1' | '2' | '3' | '4'>('1');
  const [spinnerVariant, setSpinnerVariant] = useState<
    'Default' | 'Secondary' | 'Destructive' | 'Outline' | 'Ghost' | 'Link'
  >('Default');

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>🎨 GenieX Component Showcase</h1>
      <p>Demonstração interativa dos componentes implementados do Design System</p>

      {/* Tabs Navigation */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <button
          onClick={() => setActiveTab('button')}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: activeTab === 'button' ? '#5258e4' : '#f3f4f6',
            color: activeTab === 'button' ? '#fff' : '#000',
            border: 'none',
            borderRadius: '0.375rem',
            cursor: 'pointer',
            fontWeight: 500,
          }}
        >
          Button Component
        </button>
        <button
          onClick={() => setActiveTab('spinner')}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: activeTab === 'spinner' ? '#5258e4' : '#f3f4f6',
            color: activeTab === 'spinner' ? '#fff' : '#000',
            border: 'none',
            borderRadius: '0.375rem',
            cursor: 'pointer',
            fontWeight: 500,
          }}
        >
          Spinner Loading Component
        </button>
        <button
          onClick={() => setActiveTab('toast')}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: activeTab === 'toast' ? '#5258e4' : '#f3f4f6',
            color: activeTab === 'toast' ? '#fff' : '#000',
            border: 'none',
            borderRadius: '0.375rem',
            cursor: 'pointer',
            fontWeight: 500,
          }}
        >
          Toast Component
        </button>
        <button
          onClick={() => setActiveTab('avatar')}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: activeTab === 'avatar' ? '#5258e4' : '#f3f4f6',
            color: activeTab === 'avatar' ? '#fff' : '#000',
            border: 'none',
            borderRadius: '0.375rem',
            cursor: 'pointer',
            fontWeight: 500,
          }}
        >
          Avatar Component
        </button>
      </div>

      {/* Button Showcase */}
      {activeTab === 'button' && (
        <div style={{ backgroundColor: '#f9fafb', padding: '2rem', borderRadius: '0.5rem' }}>
          <h2>Button Component</h2>
          <p>Componente de botão com múltiplas variantes, tamanhos e estados</p>

          {/* Controls */}
          <div style={{ marginBottom: '2rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {/* Size Selection */}
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                Tamanho
              </label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value as any)}
                style={{
                  padding: '0.5rem',
                  borderRadius: '0.375rem',
                  border: '1px solid #e5e7eb',
                  width: '100%',
                }}
              >
                <option value="sm">Small (sm)</option>
                <option value="md">Medium (md)</option>
                <option value="lg">Large (lg)</option>
                <option value="icon">Icon</option>
              </select>
            </div>

            {/* Variant Selection */}
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                Variante
              </label>
              <select
                value={selectedVariant}
                onChange={(e) => setSelectedVariant(e.target.value as any)}
                style={{
                  padding: '0.5rem',
                  borderRadius: '0.375rem',
                  border: '1px solid #e5e7eb',
                  width: '100%',
                }}
              >
                <option value="Default">Default</option>
                <option value="Secondary">Secondary</option>
                <option value="Destructive">Destructive</option>
                <option value="Outline">Outline</option>
                <option value="Ghost">Ghost</option>
                <option value="Link">Link</option>
              </select>
            </div>

            {/* State Selection */}
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                Estado
              </label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value as any)}
                style={{
                  padding: '0.5rem',
                  borderRadius: '0.375rem',
                  border: '1px solid #e5e7eb',
                  width: '100%',
                }}
              >
                <option value="Default">Default</option>
                <option value="Hover">Hover</option>
                <option value="Loading">Loading</option>
                <option value="Disabled">Disabled</option>
              </select>
            </div>
          </div>

          {/* Button Preview */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#fff',
              padding: '2rem',
              borderRadius: '0.5rem',
              border: '1px solid #e5e7eb',
              minHeight: '150px',
            }}
          >
            <Button
              buttonText="Click me"
              size={selectedSize}
              variant={selectedVariant}
              state={selectedState}
            />
          </div>

          {/* All Variants Grid */}
          <h3 style={{ marginTop: '2rem' }}>Todas as Variantes</h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              marginTop: '1rem',
            }}
          >
            {['Default', 'Secondary', 'Destructive', 'Outline', 'Ghost', 'Link'].map((variant) => (
              <div
                key={variant}
                style={{
                  padding: '1rem',
                  backgroundColor: '#fff',
                  borderRadius: '0.375rem',
                  border: '1px solid #e5e7eb',
                }}
              >
                <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>
                  {variant}
                </p>
                <Button
                  buttonText="Button"
                  size="md"
                  variant={variant as any}
                  state="Default"
                />
              </div>
            ))}
          </div>

          {/* All Sizes Grid */}
          <h3 style={{ marginTop: '2rem' }}>Todos os Tamanhos</h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1rem',
              marginTop: '1rem',
            }}
          >
            {['sm', 'md', 'lg', 'icon'].map((size) => (
              <div
                key={size}
                style={{
                  padding: '1rem',
                  backgroundColor: '#fff',
                  borderRadius: '0.375rem',
                  border: '1px solid #e5e7eb',
                  textAlign: 'center',
                }}
              >
                <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>
                  {size.toUpperCase()}
                </p>
                <Button
                  buttonText={size !== 'icon' ? 'Button' : undefined}
                  size={size as any}
                  variant="Default"
                  state="Default"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Spinner Showcase */}
      {activeTab === 'spinner' && (
        <div style={{ backgroundColor: '#f9fafb', padding: '2rem', borderRadius: '0.5rem' }}>
          <h2>Spinner Loading Component</h2>
          <p>Componente de carregamento com múltiplas variantes e steps de animação</p>

          {/* Controls */}
          <div style={{ marginBottom: '2rem', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            {/* Step Selection */}
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                Step (1-4)
              </label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {['1', '2', '3', '4'].map((step) => (
                  <button
                    key={step}
                    onClick={() => setSpinnerStep(step as any)}
                    style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: spinnerStep === step ? '#5258e4' : '#e5e7eb',
                      color: spinnerStep === step ? '#fff' : '#000',
                      border: 'none',
                      borderRadius: '0.375rem',
                      cursor: 'pointer',
                      fontWeight: 500,
                    }}
                  >
                    {step}
                  </button>
                ))}
              </div>
            </div>

            {/* Variant Selection */}
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                Variante
              </label>
              <select
                value={spinnerVariant}
                onChange={(e) => setSpinnerVariant(e.target.value as any)}
                style={{
                  padding: '0.5rem',
                  borderRadius: '0.375rem',
                  border: '1px solid #e5e7eb',
                  width: '100%',
                }}
              >
                <option value="Default">Default</option>
                <option value="Secondary">Secondary</option>
                <option value="Destructive">Destructive</option>
                <option value="Outline">Outline</option>
                <option value="Ghost">Ghost</option>
                <option value="Link">Link</option>
              </select>
            </div>
          </div>

          {/* Spinner Preview */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#fff',
              padding: '2rem',
              borderRadius: '0.5rem',
              border: '1px solid #e5e7eb',
              minHeight: '200px',
            }}
          >
            <SpinnerLoading step={spinnerStep} variant={spinnerVariant} size={64} />
          </div>

          {/* All Variants Grid */}
          <h3 style={{ marginTop: '2rem' }}>Todas as Variantes (Step 1)</h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              marginTop: '1rem',
            }}
          >
            {['Default', 'Secondary', 'Destructive', 'Outline', 'Ghost', 'Link'].map((variant) => (
              <div
                key={variant}
                style={{
                  padding: '1rem',
                  backgroundColor: '#fff',
                  borderRadius: '0.375rem',
                  border: '1px solid #e5e7eb',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '150px',
                }}
              >
                <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem' }}>
                  {variant}
                </p>
                <SpinnerLoading step="1" variant={variant as any} size={32} />
              </div>
            ))}
          </div>

          {/* All Steps Animation */}
          <h3 style={{ marginTop: '2rem' }}>Sequência de Animação (Default)</h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1rem',
              marginTop: '1rem',
            }}
          >
            {['1', '2', '3', '4'].map((step) => (
              <div
                key={step}
                style={{
                  padding: '1rem',
                  backgroundColor: '#fff',
                  borderRadius: '0.375rem',
                  border: '1px solid #e5e7eb',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '150px',
                }}
              >
                <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem' }}>
                  Step {step}
                </p>
                <SpinnerLoading step={step as any} variant="Default" size={32} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Toast Showcase */}
      {activeTab === 'toast' && (
        <div style={{ backgroundColor: '#f9fafb', padding: '2rem', borderRadius: '0.5rem' }}>
          <h2>Toast Component</h2>
          <p>Componente de notificação com múltiplos tipos e estados</p>

          {/* Toast Types Grid */}
          <h3 style={{ marginTop: '2rem' }}>Todos os Tipos</h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '1.5rem',
              marginTop: '1rem',
            }}
          >
            {['Default', 'Success', 'Warning', 'Destructive'].map((type) => (
              <div key={type} style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '0.375rem', border: '1px solid #e5e7eb' }}>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem', fontWeight: 600 }}>
                  Type: {type}
                </p>
                <Toast
                  type={type as any}
                  titleText="Title Text"
                  descriptionText="This is a toast description."
                  showTitle={true}
                  showButton={true}
                />
              </div>
            ))}
          </div>

          {/* Toast Variants */}
          <h3 style={{ marginTop: '2rem' }}>Sem Título</h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '1.5rem',
              marginTop: '1rem',
            }}
          >
            {['Default', 'Success'].map((type) => (
              <div key={`${type}-no-title`} style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '0.375rem', border: '1px solid #e5e7eb' }}>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem', fontWeight: 600 }}>
                  {type} (Sem Título)
                </p>
                <Toast
                  type={type as any}
                  titleText="Title Text"
                  descriptionText="This is a toast description."
                  showTitle={false}
                  showButton={true}
                />
              </div>
            ))}
          </div>

          {/* Toast Sem Botão */}
          <h3 style={{ marginTop: '2rem' }}>Sem Botão</h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '1.5rem',
              marginTop: '1rem',
            }}
          >
            {['Default', 'Destructive'].map((type) => (
              <div key={`${type}-no-button`} style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '0.375rem', border: '1px solid #e5e7eb' }}>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem', fontWeight: 600 }}>
                  {type} (Sem Botão)
                </p>
                <Toast
                  type={type as any}
                  titleText="Title Text"
                  descriptionText="This is a toast description."
                  showTitle={true}
                  showButton={false}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Avatar Showcase */}
      {activeTab === 'avatar' && (
        <div style={{ backgroundColor: '#f9fafb', padding: '2rem', borderRadius: '0.5rem' }}>
          <h2>Avatar Component</h2>
          <p>Componente de avatar com suporte a imagem e iniciais, 5 tamanhos, 2 shapes e status indicator.</p>

          {/* Type: Image — Circle */}
          <h3 style={{ marginTop: '2rem' }}>Type: Image — Circle (rounded=false)</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            {(['xsm', 'sm', 'md', 'lg', 'xl'] as const).map((s) => (
              <div key={s} style={{ textAlign: 'center' }}>
                <Avatar
                  type="Image"
                  size={s}
                  rounded={false}
                  src="https://i.pravatar.cc/150?img=3"
                />
                <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.5rem' }}>{s}</p>
              </div>
            ))}
          </div>

          {/* Type: Image — Rounded */}
          <h3 style={{ marginTop: '2rem' }}>Type: Image — Rounded Square (rounded=true)</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            {(['xsm', 'sm', 'md', 'lg', 'xl'] as const).map((s) => (
              <div key={s} style={{ textAlign: 'center' }}>
                <Avatar
                  type="Image"
                  size={s}
                  rounded={true}
                  src="https://i.pravatar.cc/150?img=3"
                />
                <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.5rem' }}>{s}</p>
              </div>
            ))}
          </div>

          {/* Type: Initials — Circle */}
          <h3 style={{ marginTop: '2rem' }}>Type: Initials — Circle (rounded=false)</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            {(['xsm', 'sm', 'md', 'lg', 'xl'] as const).map((s) => (
              <div key={s} style={{ textAlign: 'center' }}>
                <Avatar type="Initials" size={s} rounded={false} initials="LR" />
                <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.5rem' }}>{s}</p>
              </div>
            ))}
          </div>

          {/* Type: Initials — Rounded */}
          <h3 style={{ marginTop: '2rem' }}>Type: Initials — Rounded Square (rounded=true)</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            {(['xsm', 'sm', 'md', 'lg', 'xl'] as const).map((s) => (
              <div key={s} style={{ textAlign: 'center' }}>
                <Avatar type="Initials" size={s} rounded={true} initials="LR" />
                <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.5rem' }}>{s}</p>
              </div>
            ))}
          </div>

          {/* With Status */}
          <h3 style={{ marginTop: '2rem' }}>Com Status Indicator</h3>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            {(['Online', 'Offline', 'Not Disturb'] as const).map((st) => (
              <div key={st} style={{ textAlign: 'center' }}>
                <Avatar
                  type="Image"
                  size="lg"
                  rounded={false}
                  src="https://i.pravatar.cc/150?img=3"
                  showStatus
                  status={st}
                />
                <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.75rem' }}>{st}</p>
              </div>
            ))}
            {(['Online', 'Offline'] as const).map((st) => (
              <div key={`rounded-${st}`} style={{ textAlign: 'center' }}>
                <Avatar
                  type="Initials"
                  size="lg"
                  rounded={true}
                  initials="LR"
                  showStatus
                  status={st}
                />
                <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.75rem' }}>Initials · {st}</p>
              </div>
            ))}
          </div>

          {/* AvatarGroup */}
          <h3 style={{ marginTop: '2rem' }}>Avatar Group</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
            {(['xsm', 'sm', 'md', 'lg'] as const).map((s) => (
              <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', width: '40px' }}>{s}</p>
                <AvatarGroup
                  size={s}
                  avatars={[
                    'https://i.pravatar.cc/150?img=1',
                    'https://i.pravatar.cc/150?img=2',
                    'https://i.pravatar.cc/150?img=3',
                    'https://i.pravatar.cc/150?img=4',
                  ]}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ComponentShowcase;
