import { useEffect, useRef } from 'react';

const ElevenLabsWidget = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (widgetRef.current && !widgetRef.current.querySelector('elevenlabs-convai')) {
      const widget = document.createElement('elevenlabs-convai');
      widget.setAttribute('agent-id', 'agent_6201k8an9zfef9zt27hjj1k8tfxd');
      widgetRef.current.appendChild(widget);
    }
  }, []);

  return <div ref={widgetRef} />;
};

export default ElevenLabsWidget;
