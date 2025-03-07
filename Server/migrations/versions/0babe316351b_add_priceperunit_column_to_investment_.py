"""Add pricePerUnit column to Investment model

Revision ID: 0babe316351b
Revises: 74ba2ce10550
Create Date: 2025-02-08 01:40:13.378867

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0babe316351b'
down_revision = '74ba2ce10550'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('investment', schema=None) as batch_op:
        batch_op.add_column(sa.Column('pricePerUnit', sa.Float(), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('investment', schema=None) as batch_op:
        batch_op.drop_column('pricePerUnit')

    # ### end Alembic commands ###
