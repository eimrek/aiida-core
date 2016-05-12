# -*- coding: utf-8 -*-
"""
Imports used for the QueryBuilder.
See
:func:`querybuilder_base.QueryBuilderBase`,
:func:`querybuilder_django.QueryBuilder`,
:func:`querybuilder_sa.QueryBuilder`,
for details of implementation of querying functionalities.

SQLAlchemy's functionalities can be extended using SA's FunctionElement class
and @compiles decorator.
Compile a function that postgresql has implemented, but SQLAlchemy has not
"""

from sqlalchemy import (
    Column, Table, ForeignKey, UniqueConstraint,create_engine,
    select, func, join, and_, or_, not_, except_, case, exists,
    text
)

from sqlalchemy.types import (
    Integer, String, DateTime, Float, Boolean, Text,
)
from sqlalchemy.orm import (
    relationship,
    backref,
    column_property,
    sessionmaker,
    foreign, mapper, aliased
)
from sqlalchemy.dialects.postgresql import UUID, JSONB
# TO COMPILE MY OWN FUNCTIONALITIES:
from sqlalchemy.sql.expression import FunctionElement, cast
from sqlalchemy.ext.compiler import compiles

class jsonb_array_length(FunctionElement):
    name = 'jsonb_array_len'

@compiles(jsonb_array_length)
def compile(element, compiler, **kw):
    """
    Get length of array defined in a JSONB column
    """
    return "jsonb_array_length(%s)" % compiler.process(element.clauses)

class jsonb_typeof(FunctionElement):
    name = 'jsonb_typeof'

@compiles(jsonb_typeof  )
def compile(element, compiler, **kw):
    """
    Get length of array defined in a JSONB column
    """
    return "jsonb_typeof(%s)" % compiler.process(element.clauses)
