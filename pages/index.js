import Link from 'next/link'
const Index = () => (
  <div>
    Hello World.{' '}
    <Link href="/about">
      <a>About what's btn</a>
    </Link>
  </div>
)
export default Index;
