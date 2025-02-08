"""Add price_per_unit to Investment

Revision ID: 74ba2ce10550
Revises: e2b2e4513c5b
Create Date: 2025-02-07 23:57:51.194692

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '74ba2ce10550'
down_revision = 'e2b2e4513c5b'
branch_labels = None
depends_on = None


def upgrade():
    # Add the price_per_unit column with a default value
    op.add_column('investment', sa.Column('price_per_unit', sa.Float(), nullable=False, server_default='0'))

def downgrade():
    # Remove the price_per_unit column
    op.drop_column('investment', 'price_per_unit')
